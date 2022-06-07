$(document).ready(function(){

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // tag
   
    let itens = $('.featured-item') // class
    
    let destaques = $('#featured') // id

    console.log(titulos.first());

    // Configuração de produtos

    $('.featured-item a').addClass('btn btn-dark stretch-link');

    $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
     
     $('.featured-item h4').dblclick( function(){

        $(this).css({
            'color': '#f00',
            'background': '#ff0',
            'font-weight': '100',
        });

     });
     
     /*
      * Ouvinte de eventos .nav-modal-open
      */
    
     $('.nav-modal-open').on('click', function(e){
        e.preventDefault()

        let elem = $(this).attr('rel')

        $('.modal-body').html($('#' +elem).html())
        $('.modal-header h5.modal-title').html($(this).text())

        let myModal = new bootstrap.Modal($('#modalId'))

        myModal.show()

     })

    /*
     * Validação de formulário
     */
     function validate(elem){

        if(elem.val() == '' || elem.val().length <= 2){
            elem.addClass('invalido')
            elem.parent().find('.text-muted').show()
            elem.removeClass('sucesso')
            return false
        } else {
            elem.parent().find('.text-muted').hide()
            elem.removeClass('invalido')
            elem.addClass('sucesso')
        }
    }

    function validateEmail(elem){
        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i
        
        if(elem.val().match(emailValido)){
            elem.removeClass('invalido')
            elem.addClass('sucesso')
            elem.parent().find('.text-muted').hide()
        } else {
            elem.addClass('invalido')
            elem.parent().find('.text-muted').show()
            elem.removeClass('sucesso')
            return false
        }
    }

     $('body').on('submit', '.modal-body .form', function(e){
         

         const inputName = $('#nome')
         const inputEmail = $('#email')
         const inputMsg = $('#msg')

         validate(inputName)
         validateEmail(inputEmail)
         validate(inputMsg)
         
        if(inputEmail.hasClass('invalido') || inputName.hasClass('invalido') || inputMsg.hasClass('invalido')){
            e.preventDefault()
            return false
        } else{
            return
        }
     })

     $('body').on('blur', '#nome', function(){
        validate($(this))
    })

    $('body').on('blur', '#email', function(){
        validateEmail($(this))
    })

    $('body').on('blur', '#msg', function(){
        validate($(this))
    })


})
