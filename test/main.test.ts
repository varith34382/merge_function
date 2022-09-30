import { Merge, merge } from "../src/main";

describe("test merge function", () => {
    let array_1: number[] = [];
    let array_2: number[] = [];
    let array_3: Merge = merge;

    it("Test 1: 2 array have same size", () => {
        array_1 = [1, 3, 5, 7, 9];
        array_2 = [2, 4, 6, 8, 10]; 
        expect(array_3(array_1, array_2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        
    })

    it("Test 2: First array have smaller size than second array", () => {
        array_1 = [1, 3, 5];
        array_2 = [2, 4, 6, 8, 10]; 

        expect(array_3(array_1, array_2)).toEqual([1, 2, 3, 4, 5, 6, 8, 10]);
    
    })

    it("Test 3: Second array have smaller size than first array", () => {
        array_1 = [1, 3, 5, 7, 9];
        array_2 = [2, 4, 6]; 

        expect(array_3(array_1, array_2)).toEqual([1, 2, 3, 4, 5, 6, 7, 9]);
    
    })

    it("Test 4: 2 array have same size and have some duplicated number", () => {
        array_1 = [1, 3, 5, 7, 9];
        array_2 = [2, 3, 4, 9, 10]; 

        expect(array_3(array_1, array_2)).toEqual([1, 2, 3, 3, 4, 5, 7, 9, 9, 10]);
    
    })   
})