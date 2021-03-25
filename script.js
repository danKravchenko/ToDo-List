let countOfTasks = 0
let hintActive = true

$('.add-new-task').click(function we() {
    let text = $('input').val()
    if (text.length > 0 & text.length < 35) {
        countOfTasks++
        $('span').text(countOfTasks)

        let newTask = $('<div class="task"</div>')
            .append('<input type="checkbox">')
            .append('<div class="check"></div>')
            .append('<p class="task-text">' + text + '</p>')
            .append('<div class="btn-cancel"> </div>')

        $('.block-info').before(newTask)
        $('input').val('')
        $('.block-help').remove()
        hintActive = false
    }

    if (text.length >= 35) {
        alert('Very long text of task ! Please, write it smaller')
    }

    $('.btn-cancel').click(function () {
        $(this).parent().animate({
            opacity: 0.1
        }, 250, function () {
            $(this).remove()
            countOfTasks--
            $('span').text(countOfTasks)

            if (countOfTasks == 0) {
                let helpBlock = $('<div>', {
                    class: 'block-help'
                }).html('<p class = "info-text"> Here will be your task ! </p>')
                $('.block-info').before(helpBlock)
            }
        })

        hintActive = true

    })

    $("input[type='checkbox']").click(function () {
        if ($(this).prop('checked')) {
            $(this).parent().animate({
                opacity: 0.3
            }, 450)
        }
        else {
            $(this).parent().animate({
                opacity: 1
            }, 450)
        }
    })
})

$('.clear-btn').click(function () {
    countOfTasks = 0
    $('span').text(countOfTasks)

    $('.task').animate({
        opacity: 0.1
    }, 450, function () {
        $('.task').remove()
    })

    $('input').val('')

    if (hintActive == false) {
        let helpBlock = $('<div>', {
            class: 'block-help'
        }).html('<p class = "info-text"> Here will be your task ! </p>')
        $('.block-info').before(helpBlock)

        hintActive = true
    }
})


