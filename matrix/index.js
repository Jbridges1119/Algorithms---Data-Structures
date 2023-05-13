// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]


//First attempt - Easier to read/follow code but has repeatng code
function matrix(n) {
    let matrix = [],
        count = 1,
        end_index = n - 1,
        start_index = 0,
        row = 0;

    //Setup matrix grid
    for (let x = 0; x < n; x++){
        matrix[x] = [];
        for (let i = 0; i < n; i++){
            matrix[x].push('');
        }
    }

    //Break when matrix is compete
    while (count <= n**2) {
        //loop forward through upper row
          for ( let i = start_index; i <= end_index; i++) {
            matrix[row][i] = count;
            count++;
        }
        row++;

        //Count downwards through rows
        while (row < end_index) {
            matrix[row][end_index] = count;
            count++;
            row++;
        }

        //Stop iterating if count is reached
        if(count <= n**2) {
            //loop backwards through lower row
            for (let i = end_index; i >= start_index; i--){
              matrix[row][i] = count;
              count++;
            }
            row--;

            //Count upwards
            while (row > start_index) {
                matrix[row][start_index] = count;
                count++;
                row--;
            }
          
            //Adjust next loop starting parameters
            end_index--;
            start_index++;
            row++;
        }
    }

  return matrix
}

//Less repeating code but a little harder to read imo
function matrixTwo(n) {
    let matrix = [],
        count = 1,
        end_index = n - 1,
        start_index = 0,
        row = 0,
        direction_down = true,
        loop_count = 1;

    //Setup matrix grid
    for (let x = 0; x < n; x++){
        matrix[x] = [];
        for (let i = 0; i < n; i++){
            matrix[x].push('');
        }
    }

    //Break when matrix is compete
    while (count <= n**2) {
        let i = start_index,
            position = end_index;

        if (!direction_down) {
            i = end_index,
            position = start_index;
        } 

        //Count Horizontally
        while (direction_down ?  i <= end_index :  i >= start_index) {
            matrix[row][i] = count;
            count++;
            direction_down ? i++ : i--;
        }
        direction_down ? row++ : row--;

        //Count vertically
        while (direction_down ?  row < end_index :  row > start_index) {
            matrix[row][position] = count;
            count++;
            direction_down ? row++ : row--;
        }

        //Adjust starting parameters on every double loop
        if (loop_count % 2 === 0) {
            end_index--;
            start_index++;
            row++;
        }

        loop_count++
        direction_down = !direction_down

        }

    return matrix
}
module.exports = matrix;