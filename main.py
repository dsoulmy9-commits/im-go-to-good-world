def on_button_pressed_a():
    basic.show_string("Linux")
input.on_button_pressed(Button.A, on_button_pressed_a)

print("You go to good world")
basic.show_leds("""
    . # # # .
    # . . . #
    # . # . #
    # . . . #
    . # # # .
    """)