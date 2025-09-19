import os

def collect_files(root_dir, output_file):
    """
    收集指定目录下所有文件的内容到一个输出文件中
    
    参数:
        root_dir: 要扫描的根目录
        output_file: 输出文件路径
    """
    with open(output_file, 'w', encoding='utf-8') as out_f:
        for root, _, files in os.walk(root_dir):
            for file in files:
                file_path = os.path.join(root, file)
                rel_path = os.path.relpath(file_path, root_dir)
                
                try:
                    # 尝试以文本模式读取文件
                    with open(file_path, 'r', encoding='utf-8') as in_f:
                        content = in_f.read()
                except (UnicodeDecodeError, PermissionError) as e:
                    # 处理二进制文件或无权限文件
                    content = f"[无法读取文件内容: {str(e)}]"
                
                # 写入文件路径和内容
                out_f.write(f"==== {rel_path} ====\n")
                out_f.write(content)
                out_f.write("\n\n")

if __name__ == "__main__":
    # 使用当前脚本所在目录作为根目录
    root_dir = os.path.dirname(os.path.abspath(__file__))
    output_file = os.path.join(root_dir, "all_files.txt")
    
    print("开始收集文件...")
    collect_files(root_dir, output_file)
    print(f"所有文件已收集到 {output_file}")
