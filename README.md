# Mr. Zeng's Blog

Vue 3 + Vite 个人博客，发布地址为 https://blog.mrzengchn.com。

## 本地开发与构建

需要 Node.js `^20.19.0 || >=22.12.0`。以下命令在 PowerShell 中执行：

```powershell
Set-Location blog
npm run dev
```

生产构建使用 `npm run build`，输出到 `blog/dist/`；`npm run preview` 用于本地预览。已有依赖可直接复用，新环境安装依赖前先确认，再使用 `npm ci`。构建不会修改或暂存仓库根目录的旧 GitHub Pages 产物。

## 服务器部署

服务器为 `root@154.40.47.191`，Nginx 直接提供 `/opt/blog/` 中的静态文件，服务器无需安装 Node.js。使用现有 SSH 认证，不将密码写入命令或文件。

从仓库根目录构建并打包：

```powershell
Push-Location blog
try {
    npm run build
    if ($LASTEXITCODE -ne 0) { throw 'Build failed.' }
} finally {
    Pop-Location
}

$releaseName = 'blog-' + (Get-Date -Format 'yyyyMMdd-HHmmss')
$archivePath = Join-Path $env:TEMP ($releaseName + '.tar.gz')
tar.exe -czf $archivePath -C blog/dist .
if ($LASTEXITCODE -ne 0) { throw 'Archive failed.' }
Get-FileHash -LiteralPath $archivePath -Algorithm SHA256
scp.exe -o StrictHostKeyChecking=yes $archivePath "root@154.40.47.191:/opt/$releaseName.tar.gz"
if ($LASTEXITCODE -ne 0) { throw 'Upload failed.' }
```

通过 SSH 在服务器上执行以下步骤，将 `<releaseName>` 替换为刚才的实际名称：

```sh
# 核对摘要后再解压，避免发布损坏的上传文件。
sha256sum /opt/<releaseName>.tar.gz
install -d -m 0755 /opt/<releaseName>
tar -xzf /opt/<releaseName>.tar.gz -C /opt/<releaseName>
find /opt/<releaseName> -type d -exec chmod 0755 {} +
find /opt/<releaseName> -type f -exec chmod 0644 {} +

# 切换前保留当前版本；首次部署时跳过第一条 mv。
mv /opt/blog /opt/<releaseName>-previous
mv /opt/<releaseName> /opt/blog
nginx -t && systemctl reload nginx
```

切换前确认目标名称未被占用。保留上一版本和 Nginx 配置备份；如果验证失败，将失败版本移出 `/opt/blog/`，恢复上一版本及配置，通过 `nginx -t` 后重新加载。发布成功后，仅删除本次上传的临时压缩包。日常内容更新不需要修改 Nginx 配置。

## Nginx 配置

现有站点配置为 `/etc/nginx/sites-available/blog.mrzengchn.com`。修改前备份，保留现有证书、TLS 配置和 HTTP 到 HTTPS 的跳转。在该域名的 HTTPS `server` 内使用：

```nginx
root /opt/blog;
index index.html;

# 缺失的静态资源必须返回 404，不能回退为 HTML。
location /assets/ {
    try_files $uri =404;
}

# History 路由需要回退，保证文章直接访问和刷新正常。
location / {
    try_files $uri $uri/ /index.html;
}
```

证书由现有 Certbot 配置及 `certbot.timer` 自动续期。修改配置后先执行 `nginx -t`，成功后再执行 `systemctl reload nginx`。重载是异步的，验收前应等待新工作进程接管（本次部署等待 2 秒），再确认响应内容属于新版本。

## 发布验证

- 首页、`/about`、`/blog` 和全部文章可直接打开、刷新及站内跳转，地址不带 `#`。
- JavaScript、CSS、图片、音乐及 favicon 可加载，`/assets/` 下不存在的文件返回 404。
- HTTPS 证书有效，HTTP 跳转到相同路径的 HTTPS 地址。
- 分别检查源站与 Cloudflare 域名访问，并确认服务器上的其他站点仍然正常。

绕过 Cloudflare 检查源站时，保留域名以验证正确的虚拟主机与证书：

```powershell
curl.exe --noproxy '*' --resolve 'blog.mrzengchn.com:443:154.40.47.191' -I https://blog.mrzengchn.com/blog
```
