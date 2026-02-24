# Git 版本管理指南 - MATCHA TOWN Demo

## ✅ 已完成设置

Git仓库已经初始化完成！**v1.0** 已保存。

---

## 📝 三个最常用的命令

### 1️⃣ **保存新版本**（每次改完代码后）

```bash
cd "/Users/sophiehu/Desktop/MT Social listening/matcha-town-demo"
git add .
git commit -m "v1.1: 描述你改了什么"
```

**例如：**
```bash
git commit -m "v1.1: Replace hero image with actual photo"
git commit -m "v1.2: Update Cupertino store address"
git commit -m "v2.0: Add new Products page"
```

---

### 2️⃣ **查看版本历史**

```bash
git log --oneline
```

会显示类似：
```
a1b2c3d v1.2: Update store address
e4f5g6h v1.1: Replace hero image
b72b165 v1.0: Initial demo - 4 pages with full interactivity
```

---

### 3️⃣ **回退到旧版本**（如果改坏了想恢复）

```bash
# 先查看版本历史，找到想回到的版本号
git log --oneline

# 回到某个版本（例如回到v1.0）
git checkout b72b165

# 如果要永久回退到旧版本并继续开发
git reset --hard b72b165
```

**注意：** `git reset --hard` 会丢失后面的修改，谨慎使用！

---

## 🏷️ 打标签（重要版本）

重要milestone可以打tag：

```bash
git tag -a v2.0 -m "Version 2.0: Added real photos"
```

查看所有tag：
```bash
git tag
```

---

## 📋 完整工作流程示例

**场景：你要替换首页的hero图片**

```bash
# 1. 编辑 index.html，替换图片路径
# （用编辑器修改文件）

# 2. 保存到Git
cd "/Users/sophiehu/Desktop/MT Social listening/matcha-town-demo"
git add index.html
git commit -m "v1.1: Replace homepage hero image with actual store photo"

# 3. 如果这是重要版本，打tag
git tag -a v1.1 -m "Version 1.1: Real hero image"

# 4. 查看确认
git log --oneline
```

---

## 🔍 查看改了什么

**查看还没保存的修改：**
```bash
git status          # 看哪些文件改了
git diff            # 看具体改了什么内容
```

**查看两个版本之间的差异：**
```bash
git diff v1.0 v1.1
```

---

## 💾 创建备份分支（可选）

如果要做大改动，可以先创建分支：

```bash
# 创建新分支
git branch experiment

# 切换到新分支
git checkout experiment

# 在这个分支上随便改，不影响主版本

# 如果改好了，合并回主分支
git checkout main
git merge experiment

# 如果改坏了，直接删掉分支
git branch -d experiment
```

---

## 🚨 常见问题

### Q: 我改了文件，但想撤销修改
```bash
# 撤销单个文件
git checkout -- index.html

# 撤销所有修改（回到上次commit状态）
git reset --hard
```

### Q: 我不小心commit错了
```bash
# 撤销最后一次commit，但保留修改
git reset --soft HEAD~1

# 撤销最后一次commit，丢弃修改
git reset --hard HEAD~1
```

### Q: 我想看某个旧版本的文件，但不回退
```bash
# 查看v1.0版本的index.html
git show v1.0:index.html
```

### Q: 我想导出某个版本的完整文件夹
```bash
# 导出v1.0到桌面
git archive --format=zip --output=/Users/sophiehu/Desktop/matcha-town-v1.0.zip v1.0
```

---

## 📊 当前版本信息

**最新版本：** v1.0
**当前分支：** main
**总commit数：** 1

查看最新状态：
```bash
cd "/Users/sophiehu/Desktop/MT Social listening/matcha-town-demo"
git status
```

---

## 🎯 推荐工作流程

### 每次修改后：

1. **小改动**（改文案、调颜色）→ 直接commit
   ```bash
   git add .
   git commit -m "v1.x: 改了什么"
   ```

2. **大改动**（新页面、大重构）→ commit + tag
   ```bash
   git add .
   git commit -m "v2.0: 加了新功能"
   git tag -a v2.0 -m "Version 2.0: 新功能描述"
   ```

3. **实验性改动**（不确定要不要）→ 创建分支
   ```bash
   git checkout -b experimental-feature
   # 改完后再决定要不要merge
   ```

---

## 📦 备份整个Git仓库

想额外备份到其他地方：

```bash
# 复制整个文件夹（包括.git目录）
cp -r "/Users/sophiehu/Desktop/MT Social listening/matcha-town-demo" \
      "/Users/sophiehu/Desktop/BACKUP-matcha-town-demo"
```

或者推送到GitHub/GitLab（需要先创建远程仓库）。

---

## 🆘 需要帮助？

如果遇到问题，随时可以：
1. 查看状态：`git status`
2. 查看历史：`git log --oneline`
3. 问我！

---

**Git已配置完成，可以开始版本管理了！** 🎉
