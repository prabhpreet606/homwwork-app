const solveBtn = document.getElementById('solveBtn');
const photoInput = document.getElementById('photo');
const result = document.getElementById('result');

solveBtn.addEventListener('click', () => {
  if (!photoInput.files.length) {
    alert('Please upload a homework photo first');
    return;
  }

  result.innerHTML = '⏳ Analyzing homework photo...';

  // Simulate AI solving homework
  setTimeout(() => {
    result.innerHTML = `
✅ <strong>Homework Solved!</strong><br><br>

<strong>Question 1:</strong> Solve 2x + 4 = 10<br>
<em>Answer:</em> 2x = 6 → x = 3<br><br>

<strong>Question 2:</strong> What is photosynthesis?<br>
<em>Answer:</em> Photosynthesis is the process by which plants use sunlight to make food using carbon dioxide and water.<br><br>

<strong>Question 3:</strong> Write a sentence using the word "education".<br>
<em>Answer:</em> Education is important for building a successful future.<br><br>

✔️ All questions completed.
    `;
  }, 2000);
});
