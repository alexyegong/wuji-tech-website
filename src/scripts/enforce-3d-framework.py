import os
import re

REQUIRED_TERMS = {
    "zh": ["物质", "信息能量", "意识", "三维框架", "减熵"],
    "en": ["Material", "Information-Energy", "Consciousness", "Three-Dimensional Framework", "Entropy-Reduction"]
}

def check_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    locale = "en" if "/en/" in path or "en.json" in path else "zh"
    missing = [t for t in REQUIRED_TERMS[locale] if t not in content]
    
    if missing:
        return False, missing
    return True, []

violations = {}
for root_dir, _, files in os.walk('src'):
    for file in files:
        if file.endswith(('.tsx', '.mdx')):
            path = os.path.join(root_dir, file)
            passed, missing = check_file(path)
            if not passed:
                violations[path] = missing

if violations:
    print("一致性检查未通过，缺少术语：")
    for path, missing in violations.items():
        print(f"{path}: {missing}")
    exit(1)
else:
    print("全站核心术语一致性核验通过。")
