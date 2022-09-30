export interface Merge {
    (collection_1: number[], collection_2: number[]): number[];

}

export function merge(collection_1: number[], collection_2: number[]): number[] {
    let merge_array: number[] = [];
    let i: number = 0;
    let j: number = 0;

    while (i < collection_1.length && j < collection_2.length) {
        if (collection_1[i] <= collection_2[j]) {
            merge_array.push(collection_1[i]);
            i++;

        } else {
            merge_array.push(collection_2[j]);
            j++;

        }
    }

    if (i < collection_1.length) {
        merge_array = merge_array.concat(collection_1.slice(i));
    
    } else {
        merge_array = merge_array.concat(collection_2.slice(j));
    
    }

    return merge_array

}

let ans_array: Merge = merge;