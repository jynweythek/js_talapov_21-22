$(function () {
    const quiz = [
        {
            issue: "Флаг какого государства изображён на картинке?",
            pick: ["Дубай",
                "Сейшелы",
                "Прекрасное Далёко"],
            correctAnswer: 1
        },
        {
            issue: "Назовите столицу государства, флаг которого вы видите",
            pick: ["Киев (Украина)",
                "Стокгольм (Швеция)",
                "Нгерулмуд (Палау)"],
            correctAnswer: 2
        },
        {
            issue: "Почему флаг Марса такой?",
            pick: ["Налажена коммуникация с марсианами по протоколу rgb",
                "У Марса много общего с Азербайджаном — переняли национальные цвета",
                "Символизирует развития жизни на планете"],
            correctAnswer: 2
        }
    ];
    localStorage.setItem('data', JSON.stringify(quiz));
    const obj = JSON.parse(localStorage.getItem('data'));
    const html = $('#pattern').html();
    const test = tmpl(html, {
        data: obj
    });
    $('.test').append(test);
    const finishPanel = {
        show: function () {
            $('.overlay').fadeIn(200);
            $('.panel').animate({
                top: 0
            }, 200);
            for (var i = 0; i < obj.length; i++) {
                var inputs = $('.questBlock' + i + ' input:checkbox');
                var correct = obj[i].correctAnswer;

                if (inputs[correct].checked) {
                    $('<h4>' + (i + 1) + '. Шелдон Купер вами гордится</h4>')
                        .appendTo('.panel-body')
                        .addClass("alert alert-success");
                } else {
                    $('<h4>' + (i + 1) + '. Можно лучше</h4>')
                        .appendTo('.panel-body')
                        .addClass("alert alert-danger");
                }
            }
        },
        hide: function () {
            $('.overlay').fadeOut(400);
            $('.panel').animate({
                top: +1000
            }, 100, function() {
                $('.overlay h4').remove();
            });
            $('input:checkbox').removeAttr('checked');
        }
    };
    $('.btn').on('click', finishPanel.show);
    // $('.panel').on('click', preventDefault());
    $('.overlay').on('click', finishPanel.hide);
});