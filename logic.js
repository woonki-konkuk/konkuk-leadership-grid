// 설문 문항 데이터
const questions = {
    task: [
        "나는 팀원들에게 기대하는 업무 수준과 성과 기준을 명확하게 제시한다.",
        "나는 업무가 정해진 절차와 규정에 따라 진행되는지 철저히 감독한다.",
        "나는 팀의 생산성을 높이기 위해 새로운 방법이나 기술 도입을 강조한다.",
        "나는 마감일을 지키는 것을 매우 중요하게 생각하며, 팀원들을 독려한다.",
        "나는 업무의 효율성을 떨어뜨리는 모든 요소를 제거하기 위해 노력한다.",
        "나는 팀원 개개인의 업무 역할과 책임을 명확하게 할당한다.",
        "나는 업무 계획 및 일정 수립에 많은 시간을 할애한다.",
        "나는 목표 달성을 위해 자원(인력, 예산 등)을 효율적으로 배분한다.",
        "나는 팀원의 성과가 부진할 경우, 이를 직접적으로 지적하고 개선을 요구한다."
    ],
    people: [
        "나는 팀원들이 편안하게 나에게 다가와 이야기할 수 있도록 노력한다.",
        "나는 팀원들의 개인적인 사정이나 감정을 이해하고 존중한다.",
        "나는 팀원들 간의 신뢰와 팀워크를 구축하는 데 힘쓴다.",
        "나는 팀원들의 의견을 경청하고 의사결정에 반영하려고 노력한다.",
        "나는 팀원 개개인의 성장과 경력 개발을 지지하고 돕는다.",
        "나는 팀원들의 노력과 성과를 인정하고 공정하게 칭찬한다.",
        "나는 팀원들이 즐겁고 긍정적인 분위기에서 일할 수 있도록 환경을 조성한다.",
        "나는 팀원들이 스스로 결정하고 행동할 수 있도록 권한을 위임하는 것을 지지한다.",
        "나는 팀원들 간의 갈등이 발생했을 때, 공정하게 중재하여 해결하려고 노력한다."
    ]
};

// 리더십 유형 설명
const leadershipTypes = {
    "1,1": {
        name: "무관심형 리더십 (1,1)",
        description: "최소한의 노력으로 조직 구성원 자격을 유지하는 형태입니다. 업무와 인간관계 모두에 소극적인 태도를 보입니다."
    },
    "9,1": {
        name: "과업형 리더십 (9,1)",
        description: "업무 효율성과 성과를 최우선으로 생각하며, 인간관계나 구성원들의 감정은 상대적으로 덜 중요하게 여깁니다."
    },
    "1,9": {
        name: "인기형 리더십 (1,9)",
        description: "구성원들의 감정과 관계를 최우선으로 생각하며, 업무 성과나 효율성은 상대적으로 덜 중요하게 여깁니다."
    },
    "5,5": {
        name: "중도형 리더십 (5,5)",
        description: "업무 성과와 인간관계 사이에서 적절한 균형을 추구합니다. 양쪽 모두를 적당한 수준으로 유지하려 노력합니다."
    },
    "9,9": {
        name: "팀형 리더십 (9,9)",
        description: "높은 업무 성과와 좋은 인간관계를 동시에 추구합니다. 팀워크를 통해 최상의 결과를 이끌어내려 노력합니다."
    }
};

const scaleDescriptions = {
    0: "전혀 해당되지 않는다",
    1: "거의 하지 않는다",
    2: "가끔 한다",
    3: "보통으로 한다",
    4: "자주 한다",
    5: "항상 그렇다"
};

// 과업 중심 문항
const taskQuestions = [
    "나는 업무가 정해진 기준과 마감기한에 맞춰 이행되도록 철저히 관리한다.",
    "나는 생산성과 성과 향상을 최우선 목표로 둔다.",
    "나는 팀이 목표를 달성할 수 있도록 계획과 일정을 체계적으로 수립한다.",
    "나는 성과가 미달된 경우 이를 즉각적으로 피드백하고 개선을 요구한다.",
    "나는 조직의 목표에 부합하지 않는 행동을 엄격하게 제재한다.",
    "나는 새로운 기술이나 절차를 도입하여 팀의 효율성을 높이려고 한다.",
    "나는 과업 수행 시 구체적인 역할과 책임을 명확히 한다.",
    "나는 자원(인력, 예산 등)을 합리적으로 배분하여 최대의 성과를 내도록 한다.",
    "나는 정량적 지표나 목표 달성률 등을 지속적으로 모니터링한다."
];

// 사람 중심 문항
const peopleQuestions = [
    "나는 팀원들이 의사결정에 참여하도록 격려하며, 그들의 아이디어와 제안을 실행하려고 노력한다.",
    "나는 직원들이 직무를 잘 수행하도록 도와주고 코칭하는 데 큰 관심을 가진다.",
    "나는 구성원 간의 갈등을 중재하고, 긍정적인 관계를 유지하려고 노력한다.",
    "나는 팀원들이 일을 즐겁게 할 수 있는 분위기를 만들기 위해 노력한다.",
    "나는 직원 개개인의 성장을 지원하고, 경력 개발을 장려한다.",
    "나는 공정성과 배려를 기반으로 리더십을 발휘한다.",
    "나는 팀원들과 신뢰를 바탕으로 관계를 맺고자 한다.",
    "나는 업무 외적인 어려움이나 개인적인 상황도 이해하고 돕는다.",
    "나는 팀원들의 노력을 인정하고 정기적으로 피드백과 칭찬을 제공한다."
];

let currentQuestions = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createScaleInput(questionIndex) {
    let scaleHtml = '<div class="scale">';
    for (let i = 0; i <= 5; i++) {
        scaleHtml += `
            <label class="tooltip">
                <input type="radio" name="q${questionIndex}" value="${i}" onchange="handleAnswer(${questionIndex}, ${i})">
                ${i}
                <span class="tooltiptext">${scaleDescriptions[i]}</span>
            </label>`;
    }
    scaleHtml += '</div>';
    return scaleHtml;
}

function calculateScores() {
    let taskTotal = 0;
    let peopleTotal = 0;

    // 각 문항을 순회하면서 점수 계산
    currentQuestions.forEach((question, index) => {
        const selectedValue = document.querySelector(`input[name="q${index}"]:checked`)?.value;
        if (selectedValue !== undefined) {
            if (taskQuestions.includes(question)) {
                taskTotal += parseInt(selectedValue);
            } else {
                peopleTotal += parseInt(selectedValue);
            }
        }
    });

    console.log('Raw scores:', { taskTotal, peopleTotal });
    
    // 0-45점을 0-9점으로 변환
    const taskScore = taskTotal * 0.2;
    const peopleScore = peopleTotal * 0.2;
    
    console.log('Converted scores:', { taskScore, peopleScore });
    
    return { taskScore, peopleScore };
}

function checkAllAnswered() {
    for (let i = 0; i < currentQuestions.length; i++) {
        if (!document.querySelector(`input[name="q${i}"]:checked`)) {
            return false;
        }
    }
    return true;
}

function startSurvey() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('survey-form').style.display = 'block';
    
    // 문항 섞기
    currentQuestions = shuffleArray([...taskQuestions, ...peopleQuestions]);
    
    // 설문 폼 생성
    let formHtml = '';
    currentQuestions.forEach((question, index) => {
        formHtml += `
            <div class="question">
                <p>${index + 1}. ${question}</p>
                ${createScaleInput(index)}
            </div>
        `;
    });
    
    formHtml += '<div class="button-container"><button onclick="showResults()">진단 완료</button></div>';
    document.getElementById('survey-form').innerHTML = formHtml;
}

function handleAnswer(questionIndex, value) {
    // 답변만 기록하고, 점수 계산은 최종 제출 시에 수행
    console.log(`Question ${questionIndex + 1} answered with value ${value}`);
}

function showResults() {
    if (!checkAllAnswered()) {
        alert('모든 문항에 답변해주세요.');
        return;
    }
    
    document.getElementById('survey-form').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    
    const { taskScore, peopleScore } = calculateScores();
    
    drawGrid(taskScore, peopleScore);
    showLeadershipType(taskScore, peopleScore);
}

function drawGrid(taskScore, peopleScore) {
    const canvas = document.getElementById('grid-canvas');
    const ctx = canvas.getContext('2d');
    
    // 캔버스 크기 설정
    canvas.width = 400;
    canvas.height = 400;
    
    // 배경 색상
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, 400, 400);
    
    // 그리드 그리기
    ctx.strokeStyle = '#cccccc';
    ctx.beginPath();
    for (let i = 0; i <= 400; i += 40) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, 400);
        ctx.moveTo(0, i);
        ctx.lineTo(400, i);
    }
    ctx.stroke();
    
    // 축 레이블
    ctx.fillStyle = '#000000';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    
    // X축 (과업 중심)
    for (let i = 1; i <= 9; i++) {
        ctx.fillText(i.toString(), i * 40 - 20, 395);
    }
    ctx.fillText('과업 중심', 200, 380);
    
    // Y축 (사람 중심)
    ctx.save();
    ctx.translate(20, 200);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('사람 중심', 0, 0);
    ctx.restore();
    
    for (let i = 1; i <= 9; i++) {
        ctx.fillText(i.toString(), 25, 400 - (i * 40 - 20));
    }
    
    // 결과 점 그리기
    ctx.beginPath();
    ctx.arc(taskScore * 40 - 20, 400 - (peopleScore * 40 - 20), 5, 0, Math.PI * 2);
    ctx.fillStyle = '#ff0000';
    ctx.fill();
}

function showLeadershipType(taskScore, peopleScore) {
    let type = '';
    let description = '';
    
    if (taskScore <= 5 && peopleScore <= 5) {
        type = '무관심형 리더십 (1,1)';
        description = '조직의 성과와 구성원들에 대한 관심이 모두 낮은 유형입니다. 리더로서의 책임과 역할을 회피하는 경향이 있습니다.';
    } else if (taskScore > 5 && peopleScore <= 5) {
        type = '과업형 리더십 (9,1)';
        description = '조직의 성과에 대한 관심은 높지만 구성원들에 대한 관심은 낮은 유형입니다. 목표 달성을 최우선으로 생각합니다.';
    } else if (taskScore <= 5 && peopleScore > 5) {
        type = '인기형 리더십 (1,9)';
        description = '구성원들에 대한 관심은 높지만 조직의 성과에 대한 관심은 낮은 유형입니다. 좋은 인간관계를 중시합니다.';
    } else if (taskScore > 5 && peopleScore > 5) {
        type = '팀형 리더십 (9,9)';
        description = '조직의 성과와 구성원들에 대한 관심이 모두 높은 유형입니다. 이상적인 리더십 유형으로 평가됩니다.';
    } else {
        type = '중도형 리더십 (5,5)';
        description = '조직의 성과와 구성원들에 대한 관심이 중간 수준인 유형입니다. 적절한 타협점을 찾으려 노력합니다.';
    }
    
    document.getElementById('result-type').innerHTML = `
        <h3>${type}</h3>
        <p>${description}</p>
        <p>과업 중심 점수: ${taskScore.toFixed(1)} / 9.0</p>
        <p>사람 중심 점수: ${peopleScore.toFixed(1)} / 9.0</p>
    `;
}

function restartSurvey() {
    document.getElementById('results').style.display = 'none';
    document.getElementById('start-screen').style.display = 'block';
} 
