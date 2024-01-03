
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";



export const Questions = {
    questions: [
        {
            question:
                "What is the square root of 72?",
            choices: [
                "5√2",
                "6√2",
                "7√2",
                "I don't know",
            ],
            type: "radio",
            correctAnswer: "6√2",
        },
        {
            question:
                "What graph represents the following function:  f(x) = sinx",
            choices: [
                <img src={img1} alt="Graph Function" width={250} />,
                <img src={img2} alt="Graph Function" width={250} />,
                <img src={img3} alt="Graph Function" width={250} />,
                <img src={img4} alt="Graph Function" width={250} />,
            ],
            type: "radio",
            correctAnswer: {img1},
        },
        {
            question:
                "What is the answer to the following operation (12² − 6²) ÷ (13² − 5²) ?",
            choices: [
                "13",
                "30",
                "3/4",
                "7",
            ],
            type: "radio",
            correctAnswer: "3/4",
        },
        {
            question:
                "What are the first three common multiples of 15 and 20.",
            choices: [
                "30, 60, 90",
                "15, 30, 45",
                "20, 40, 60",
                "60, 120, 180",
            ],
            type: "radio",
            correctAnswer: "60, 120, 180",
        },
        {
            question:
                "Convert 87 to binary representation",
            choices: [
                "1010111",
                "1011101",
                "10110100",
                "1101100",
            ],
            type: "radio",
            correctAnswer: "1010111",
        },
        {
            question:
                "Find the value of y = 12x - 15 given x = 3",
            choices: [
                "19",
                "21",
                "18",
                "20",
            ],
            type: "radio",
            correctAnswer: "21",
        },
        {
            question:
                "Find the x- intercept of y = 2x + 8",
            choices: [
                "-4",
                "8",
                "4",
                "I don't know",
            ],
            type: "radio",
            correctAnswer: "-4",
        },
        {
            question:
                <>"What is the slope of the following graph?" <img src={img5} /></>,
            choices: [
                "No Solution",
                "m = 8",
                "m = 1/4",
                "m = 4",
            ],
            type: "radio",
            correctAnswer: "4",
        },
        {
            question:
                "Solve for x:  1/5x + 1/3 = 1/2",
            choices: [
                "1/6",
                "5/6",
                "1/2",
                "4/3",
            ],
            type: "radio",
            correctAnswer: "5/6",
        },
        {
            question:
                "Determine if the following numbers are either prime or composite:  13, 18, 23, 33, 63",
            choices: [
                "Prime, Composite, Prime, Composite, Prime",
                "Prime, Composite, Composite, Prime, Prime",
                "Prime, Composite, Prime, Composite, Composite",
                "Composite, Prime, Composite, Prime, Prime",
            ],
            type: "radio",
            correctAnswer: "Prime, Composite, Prime, Composite, Composite",
        },
    ]
}

export const resultInitialState = {
    score: 0,
    correct: 0,
    wrong: 0,
}
