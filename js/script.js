window.onload = init;

function init() {
    document.getElementById('el-circle-weekday').innerHTML = moment().format("ddd");
    document.getElementById('el-circle-date').innerHTML = moment().format("D");
    document.getElementById('el-circle-month').innerHTML = moment().format("MMM");

    //display current time in a half an hour range
    var leftHour, rightHour = '';
    if (parseInt(moment().format('mm'), 10) < 30) {
        leftHour = moment().format('hh:00a');
        rightHour = moment().format('hh:30a');
    } else {
        leftHour = moment().format('hh:30a');
        rightHour = moment().add(1, 'h').format('hh:00a');
    }
    document.getElementById('el-circle-time').innerHTML = leftHour + ' - ' + rightHour;
}
