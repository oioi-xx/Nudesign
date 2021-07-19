$(document).ready(function () {
    let hero = document.getElementById('hero-slides');
    let menu = document.getElementById('menu');
    let slides = document.getElementById('slides');
    let dribbble = document.getElementById('dribbble');
    let next = ['next', 'next-catch'].map(n => document.getElementById(n));
    let prev = ['prev', 'prev-catch'].map(n => document.getElementById(n));
    let slideChildren = slides.children;
    let slideCount = slides.children.length;
    let currentlyDemoing = false;
    let currentPage = 0;
    let slidesPerPage = () => window.innerWidth > 1700 ? 4 : window.innerWidth > 1200 ? 3 : 2;
    let maxPageCount = () => slideCount / slidesPerPage() - 1;

    function goToPage(pageNumber = 0) {
        currentPage = Math.min(maxPageCount(), Math.max(0, pageNumber));
        console.log(currentPage);
        hero.style.setProperty('--page', currentPage);
    }

    function sleep(time) {
        return new Promise(res => setTimeout(res, time));
    }

    function hoverSlide(index) {
        index in slideChildren &&
            slideChildren[index].classList.add('hover');
    }

    function unhoverSlide(index) {
        index in slideChildren &&
            slideChildren[index].classList.remove('hover');
    }

    async function demo() {
        if (currentlyDemoing) {
            return;
        }
        currentlyDemoing = true;
        if (currentPage !== 0) {
            goToPage(0);
            await sleep(800);
        }
        let slides = slidesPerPage();
        let pageSeq_ = {
            2: [1, 2, 1],
            3: [1, 2, 1 / 3],
            4: [1, 1, 0]
        };
        let pageSeq = pageSeq_[slides] || pageSeq_[4];
        let slideSeq_ = {
            2: [2, 4, 3],
            3: [3, 6, 2],
            4: [3, 6, 2]
        };
        let slideSeq = slideSeq_[slides] || slideSeq_[2];
        await sleep(300);
        goToPage(pageSeq[0]);
        await sleep(500);
        hoverSlide(slideSeq[0]);
        await sleep(1200);
        goToPage(pageSeq[1]);
        dribbble.classList.add('hover');
        unhoverSlide(slideSeq[0]);
        await sleep(500);
        hoverSlide(slideSeq[1]);
        await sleep(1200);
        goToPage(pageSeq[2]);
        unhoverSlide(slideSeq[1]);
        await sleep(300);
        hoverSlide(slideSeq[2]);
        await sleep(1600);
        goToPage(0);
        unhoverSlide(slideSeq[2]);
        dribbble.classList.remove('hover');
        currentlyDemoing = false;
    }

    next.forEach(n => n.addEventListener('click', () => !currentlyDemoing && goToPage(currentPage + 1)));
    prev.forEach(n => n.addEventListener('click', () => !currentlyDemoing && goToPage(currentPage - 1)));
    menu.addEventListener('click', demo);

    sleep(100).then(demo);

    // window.addEventListener('resize', () => {
    // console.log(document.body.style.getPropertyValue('--slide-per-page'));
    // });

    /* requestAnimationFrame */
    

});


$(function () {
$(document).ready(function(){
    
      AOS.init();
    // filter
    $('nav a').on('click', function(event){
        event.preventDefault();
        // current class
        $('nav li.current').removeClass('current');
        $(this).parent().addClass('current');

        // set new heading
        $('h1.heading').text($(this).text());
        
        // filter link text
        var category = $(this).text().toLowerCase().replace(' ', '-');
        
        // remove hidden class if "all" is selected
        if(category == 'all-projects'){
            $('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
        } else {
            $('ul#gallery li').each(function(){
               if(!$(this).hasClass(category)){
                   $(this).hide().addClass('hidden');
               } else {
                   $(this).fadeIn('slow').removeClass('hidden');
               }
            });
        }
        return false;        
    });
    // lightbox
    $('ul#gallery a').on('click', function(event){
        event.preventDefault();
        var link = $(this).find('img').attr('src');
        $('.gallery img').attr('src', '');
        $('.gallery img').attr('src', link);
        $('.gallery').fadeIn('slow');
    });
    // close lightbox
    $('.gallery').on('click', function(event){
        event.preventDefault();
        $('.gallery').fadeOut('slow');
    });
});
});




$(function () {
    $('#hero-slides #slides .slide01 .link button').click(function () {
        $('.dumy_tool').css({
            "display": "none"
        })
        $('#hero-slides #slides .slide01').css({
            'width': '100em',
            "transition": "all .3s"
        });
        $('#hero-slides #slides .slide01 .body').css({
            "display": "none"
        });
        $('#hero-slides #slides .slide01 .click_body').css({
            "display": "block"
        }).delay('200');
        $('#next').css({
            "display": "none"
        });
        $('#prev').css({
            "display": "none"
        });
    });
});

$(function () {

    $('#hero-slides #slides .slide01 .back').click(function () {
        $('.dumy_tool').css({
            "display": "flex"
        })
        $('#hero-slides #slides .slide01').css({
            'width': '24em',
            "transition": "all .3s"
        });
        $('#hero-slides #slides .slide01 .body').css({
            "display": "block"
        });
        $('#hero-slides #slides .slide01 .click_body').css({
            "display": "none"
        });
        $('#next').css({
            "display": "block"
        });
        $('#prev').css({
            "display": "block"
        });
    });
});






$(function () {
    $('#hero-slides #slides .slide02 .link button').click(function () {
        $('.dumy_tool').css({
            "display": "none"
        })
        $('#hero-slides #slides .slide02').css({
            'width': '100em',
            "transition": "all .3s"
        });
        $('#hero-slides').css({
            'left': '0',
            "transition": "all .3s"
        });
        $('#hero-slides #slides .slide02 .body').css({
            "display": "none"
        });
        $('#hero-slides #slides .slide02 .click_body').css({
            "display": "block"
        }).delay('200');
        $('#next').css({
            "display": "none"
        });
        $('#prev').css({
            "display": "none"
        });
    });
});

$(function () {
    $('#hero-slides #slides .slide02 .back').click(function () {
        $('.dumy_tool').css({
            "display": "flex"
        })
        $('#hero-slides').css({
            'left': '220px',
            "transition": "all .3s"
        });
        $('#hero-slides #slides .slide02').css({
            'width': '24em',
            "transition": "all .3s"
        });
        $('#hero-slides #slides .slide02 .body').css({
            "display": "block"
        });
        $('#hero-slides #slides .slide02 .click_body').css({
            "display": "none"
        });
        $('#next').css({
            "display": "block"
        });
        $('#prev').css({
            "display": "block"
        });
    });
});





$(function () {
    $('#hero-slides #slides .slide03 .link button').click(function () {
        $('.dumy_tool').css({
            "display": "none"
        })
        $('#hero-slides #slides .slide03').css({
            'width': '100em',
            "transition": "all .3s"
        });
        $('#hero-slides').css({
            'left': '-520px',
            "transition": "all .3s"
        });
        $('#hero-slides #slides .slide03 .body').css({
            "display": "none"
        });
        $('#hero-slides #slides .slide03 .click_body').css({
            "display": "block"
        }).delay('200');
        $('#next').css({
            "display": "none"
        });
        $('#prev').css({
            "display": "none"
        });
    });
});

$(function () {
    $('#hero-slides #slides .slide03 .back').click(function () {
        $('.dumy_tool').css({
            "display": "flex"
        })
        $('#hero-slides').css({
            'left': '220px',
            "transition": "all .3s"
        });
        $('#hero-slides #slides .slide03').css({
            'width': '24em',
            "transition": "all .3s"
        });
        $('#hero-slides #slides .slide03 .body').css({
            "display": "block"
        });
        $('#hero-slides #slides .slide03 .click_body').css({
            "display": "none"
        });
        $('#next').css({
            "display": "block"
        });
        $('#prev').css({
            "display": "block"
        });
    });
});






$(function () {
    $('#hero-slides #slides .slide04 .link button').click(function () {
        $('.dumy_tool').css({
            "display": "none"
        })
        $('#hero-slides #slides .slide04').css({
            'width': '100em',
            "transition": "all .3s"
        });
        $('#hero-slides').css({
            'left': '-720px',
            "transition": "all .3s"
        });
        $('#hero-slides #slides .slide04 .body').css({
            "display": "none"
        });
        $('#hero-slides #slides .slide04 .click_body').css({
            "display": "block"
        }).delay('200');
        $('#next').css({
            "display": "none"
        });
        $('#prev').css({
            "display": "none"
        });
    });
});

$(function () {
    $('#hero-slides #slides .slide04 .back').click(function () {
        $('.dumy_tool').css({
            "display": "flex"
        })
        $('#hero-slides').css({
            'left': '220px',
            "transition": "all .3s"
        });
        $('#hero-slides #slides .slide04').css({
            'width': '24em',
            "transition": "all .3s"
        });
        $('#hero-slides #slides .slide04 .body').css({
            "display": "block"
        });
        $('#hero-slides #slides .slide04 .click_body').css({
            "display": "none"
        });
        $('#next').css({
            "display": "block"
        });
        $('#prev').css({
            "display": "block"
        });
    });
});


$(function () {

    $('#hero-slides #slides .slide05 .link button').click(function () {
        $('.dumy_tool').css({
            "display": "none"
        })
        $('#hero-slides #slides .slide05').css({
            'width': '100em',
            "transition": "all .3s"
        });
        $('#hero-slides').css({
            'left': '-1020px',
            "transition": "all .3s"
        });
        $('#hero-slides #slides .slide05 .body').css({
            "display": "none"
        });
        $('#hero-slides #slides .slide05 .click_body').css({
            "display": "block"
        }).delay('200');
        $('#next').css({
            "display": "none"
        });
        $('#prev').css({
            "display": "none"
        });
    });
});

$(function () {
    $('#hero-slides #slides .slide05 .back').click(function () {
        $('.dumy_tool').css({
            "display": "flex"
        })
        $('#hero-slides').css({
            'left': '720px',
            "transition": "all .3s"
        });
        $('#hero-slides #slides .slide05').css({
            'width': '24em',
            "transition": "all .3s"
        });
        $('#hero-slides #slides .slide05 .body').css({
            "display": "block"
        });
        $('#hero-slides #slides .slide05 .click_body').css({
            "display": "none"
        });
        $('#next').css({
            "display": "block"
        });
        $('#prev').css({
            "display": "block"
        });
    });
});






/**/

$(function () {
    $(window).scroll(function () {
        let pos = $(window).scrollTop();
        if (pos > 0) {
            bar.animate(0.90);
        }
    })


    var bar = new ProgressBar.Circle(progress, {
        color: '#555',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: {
            color: '#aaa',
            width: 1
        },
        to: {
            color: '#222',
            width: 4
        },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }

        }
    });
});
/*-------------------------------------1번째프로그래스------------------------------------------------------------------------------*/
$(function () {
    $(window).scroll(function () {
        let pos = $(window).scrollTop();
        if (pos > 100) {
            bar.animate(0.90); // Number from 0.0 to 1.0
        }
    })


    var bar = new ProgressBar.Circle(progress1, {
        color: '#555',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: {
            color: '#aaa',
            width: 1
        },
        to: {
            color: '#222',
            width: 4
        },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }

        }
    });
});
/*-------------------------------------2번째프로그래스------------------------------------------------------------------------------*/
$(function () {
    $(window).scroll(function () {
        let pos = $(window).scrollTop();
        if (pos > 100) {
            bar.animate(0.60); // Number from 0.0 to 1.0
        }
    })


    var bar = new ProgressBar.Circle(progress2, {
        color: '#555',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: {
            color: '#aaa',
            width: 1
        },
        to: {
            color: '#222',
            width: 4
        },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }

        }
    });
});
/*-------------------------------------3번째프로그래스------------------------------------------------------------------------------*/
$(function () {
    $(window).scroll(function () {
        let pos = $(window).scrollTop();
        if (pos > 100) {
            bar.animate(0.80); // Number from 0.0 to 1.0
        }
    })


    var bar = new ProgressBar.Circle(progress3, {
        color: '#555',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: {
            color: '#aaa',
            width: 1
        },
        to: {
            color: '#222',
            width: 4
        },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }

        }
    });
});
/*-------------------------------------4번째프로그래스------------------------------------------------------------------------------*/
$(function () {
    $(window).scroll(function () {
        let pos = $(window).scrollTop();
        if (pos > 80) {
            bar.animate(0.90); // Number from 0.0 to 1.0
        }
    })


    var bar = new ProgressBar.Circle(progress4, {
        color: '#555',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: {
            color: '#aaa',
            width: 1
        },
        to: {
            color: '#222',
            width: 4
        },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }

        }
    });
});
/*-------------------------------------5번째프로그래스------------------------------------------------------------------------------*/
$(function () {
    $(window).scroll(function () {
        let pos = $(window).scrollTop();
        if (pos > 100) {
            bar.animate(0.90); // Number from 0.0 to 1.0
        }
    })


    var bar = new ProgressBar.Circle(progress5, {
        color: '#555',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: {
            color: '#aaa',
            width: 1
        },
        to: {
            color: '#111',
            width: 4
        },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }

        }
    });
});
/*-------------------------------------6번째프로그래스------------------------------------------------------------------------------*/
$(function () {
    $(window).scroll(function () {
        let pos = $(window).scrollTop();
        if (pos > 100) {
            bar.animate(0.90); // Number from 0.0 to 1.0
        }
    })


    var bar = new ProgressBar.Circle(progress6, {
        color: '#555',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: {
            color: '#aaa',
            width: 1
        },
        to: {
            color: '#111',
            width: 4
        },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }

        }
    });
});
/*-------------------------------------7번째프로그래스------------------------------------------------------------------------------*/
$(function () {
    $(window).scroll(function () {
        let pos = $(window).scrollTop();
        if (pos > 100) {
            bar.animate(0.90); // Number from 0.0 to 1.0
        }
    })


    var bar = new ProgressBar.Circle(progress7, {
        color: '#555',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: {
            color: '#666',
            width: 1
        },
        to: {
            color: '#111',
            width: 4
        },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }

        }
    });
});
/*-------------------------------------8번째프로그래스------------------------------------------------------------------------------*/
$(function () {
    $(window).scroll(function () {
        let pos = $(window).scrollTop();
        if (pos > 100) {
            bar.animate(0.90); // Number from 0.0 to 1.0
        }
    })


    var bar = new ProgressBar.Circle(progress8, {
        color: '#555',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: {
            color: '#FFE76B',
            width: 1
        },
        to: {
            color: '#111',
            width: 4
        },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }

        }
    });

});
