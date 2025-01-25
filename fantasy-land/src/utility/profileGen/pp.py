from PIL import Image, ImageDraw, ImageFont

def create_player_image(number, primary_color, secondary_color, output_file):
    # Create a blank image
    img = Image.new('RGB', (200, 200), primary_color)
    draw = ImageDraw.Draw(img)

    # Load a font
    font = ImageFont.truetype('arial.ttf', 100)

    # Add the number to the image
    text_size = draw.textsize(number, font=font)
    text_x = (img.width - text_size[0]) / 2
    text_y = (img.height - text_size[1]) / 2
    draw.text((text_x, text_y), number, font=font, fill=secondary_color)

    # Save the image
    img.save(output_file)

# Example usage
create_player_image('23', '#FF0000', '#FFFFFF', 'player_23.png')
