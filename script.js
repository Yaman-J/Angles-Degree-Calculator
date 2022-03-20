let txtSide = document.getElementById('Side')
let txtResult = document.getElementById('Result')

function compute(sides) {
    let triangles = sides - 2
    let sumOfAngles = 180 * triangles
    let angleDegree = sumOfAngles / sides

    txtResult.value = angleDegree;
}

txtSide.oninput = (e) => {
    const sides = parseInt(e.target.value);
    compute(sides);
}