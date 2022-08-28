let goal, fieldData;
let sessionData;

window.addEventListener('onWidgetLoad', function (obj) {
    fieldData = obj.detail.fieldData;
    goal = fieldData["goal"];
    sessionData = obj["detail"]["session"]["data"];
    analysePoints();
});

window.addEventListener('onSessionUpdate', function (obj) {
    sessionData = obj["detail"]["session"];
    analysePoints();
});



function analysePoints() {
    let data = sessionData;
    updateBar(data["tip-goal"]["amount"]);
}

function updateBar(amount) {
    let percentage = amount / goal * 100;
    let current = "$" + amount + " (" + parseFloat(percentage).toFixed(1) + "%)";
    $('.marker').css('background-position', Math.min(100, percentage) + "%");
    $("#goal-current").html(current);
}