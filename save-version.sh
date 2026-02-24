#!/bin/bash

# MATCHA TOWN Demo - Quick Save Script
# 快速保存新版本的脚本

echo "======================================"
echo "  MATCHA TOWN Demo - Save Version"
echo "======================================"
echo ""

# 切换到项目目录
cd "$(dirname "$0")"

# 显示当前修改的文件
echo "📝 Modified files:"
git status --short

echo ""
echo "======================================"
echo ""

# 询问版本号
read -p "📌 Version number (e.g., v1.1, v2.0): " version

# 询问修改描述
read -p "📝 What did you change?: " description

echo ""
echo "Saving version: $version"
echo "Description: $description"
echo ""

# 执行Git命令
git add .
git commit -m "$version: $description"

# 询问是否打tag
read -p "🏷️  Create tag for this version? (y/n): " create_tag

if [ "$create_tag" = "y" ] || [ "$create_tag" = "Y" ]; then
    git tag -a "$version" -m "Version $version: $description"
    echo "✅ Tag $version created!"
fi

echo ""
echo "✅ Version saved successfully!"
echo ""
echo "📊 Recent commits:"
git log --oneline -5

echo ""
echo "======================================"
echo "Done! 🎉"
echo "======================================"
