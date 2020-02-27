const activeGoalElement = document.querySelector('#active-goal h2');
const goalListElement = document.querySelector('#all-goals ul');

const goals = [
  {
    id: 'g1',
    text: 'Learn all about JavaScript!'
  },
  {
    id: 'g2',
    text: 'Understand JavaScript function execution.'
  }
];

function setAsActiveHandler(goalId) {
  const selectedGoal = goals.find(g => g.id === goalId);
  activeGoalElement.textContent = selectedGoal.text;
}

function init() {
  for (const goal of goals) {
    const goalElement = document.createElement('li');
    goalElement.innerHTML = `
      <span>${goal.text}</span>
      <button>Set as Active Goal</button>
    `;

    goalListElement.append(goalElement);
  }
}

init();
