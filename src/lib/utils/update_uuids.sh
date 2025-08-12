#!/bin/bash


# Function to generate a UUID
generate_uuid() {
    python3 -c 'import uuid; print(str(uuid.uuid4()))'
}

# Base directory for Book 4 Fire (using relative path from utils directory)
BOOK_DIR="../data/books/book_4_fire"

# Process all chapter directories
for chapter_dir in "$BOOK_DIR/chapters"/*/; do
    echo "Processing chapter: $chapter_dir"
    
    # Process chapter index.ts
    if [ -f "${chapter_dir}index.ts" ]; then
        echo "Processing ${chapter_dir}index.ts"
        tmp_file=$(mktemp)
        
        while IFS= read -r line; do
            if [[ $line =~ ^[[:space:]]*id:[[:space:]]*\'\',[[:space:]]*$ ]]; then
                uuid=$(generate_uuid)
                echo "$(echo "$line" | sed "s/''/\'$uuid\'/")" >> "$tmp_file"
            else
                echo "$line" >> "$tmp_file"
            fi
        done < "${chapter_dir}index.ts"
        
        mv "$tmp_file" "${chapter_dir}index.ts"
    fi
    
    # Process all section directories
    for section_dir in "$chapter_dir/sections"/*/; do
        if [ -f "${section_dir}index.ts" ]; then
            echo "Processing ${section_dir}index.ts"
            tmp_file=$(mktemp)
            
            while IFS= read -r line; do
                if [[ $line =~ ^[[:space:]]*id:[[:space:]]*\'\',[[:space:]]*$ ]]; then
                    uuid=$(generate_uuid)
                    echo "$(echo "$line" | sed "s/''/\'$uuid\'/")" >> "$tmp_file"
                else
                    echo "$line" >> "$tmp_file"
                fi
            done < "${section_dir}index.ts"
            
            mv "$tmp_file" "${section_dir}index.ts"
        fi
    done
done

echo "All files processed successfully"