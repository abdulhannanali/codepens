function setup () {
	createCanvas(640, 480)
}


function draw () {
	drawMitRedLogo()
}


function drawMitRedLogo() {
	// Red M
	fill(163, 31, 52)
	rect(30, 30, 10, 75)
	rect(45, 30, 10, 50)
	rect(60, 30, 10, 75)

	// I having a red dot and black lower portion
	rect(75, 30, 10, 10)
	fill(194, 192, 191)
	rect(75, 50, 10, 55) 

	// T for MIT
	fill(163, 31, 52)
	rect(90, 30, 30, 10)
	rect(90, 50, 10, 55)
}
