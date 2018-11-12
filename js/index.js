$(document).ready(function () {
    $('.select_menu').each(function () {
        var $this = $(this),
            $subMenu = $this.find("> ul li ul");

        $this.find(".option_selected").mouseover(function () {
            var $selected = $(this),
                $nowSelected = $('.selected');
            $nowSelected.removeClass('selected').parents('.select_menu').find('ul li ul').hide();

            if ($selected[0] != $nowSelected[0]) {
                $subMenu.toggle($selected.toggleClass('selected').hasClass('selected'));
            }

            return false;
        });


        $this.find(".option_list ul li a").click(function () {
            var current = $(this),
                menuname = menuname.text();

            //連姞
            location.href = current.attr("href");
            $this.find('.selected').removeClass('selected').end().find(".option_list a.option_selected").text(menuname);
            $subMenu.hide();
            return false;

        }).hover(function () {
            $this.find('.hovered_item').removeClass('hovered_item');
            $(this).addClass('hovered_item');
        });
    });

}).click(function () {
    $('.selected').removeClass('selected').parents('.select_menu').find('ul li ul').hide();
});
