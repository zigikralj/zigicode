import sys
try:
    from PIL import Image
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

img = Image.open('public/stairs.png').convert('L')
img = img.resize((100, 45))
pixels = img.load()
chars = " .:-=+*#%@"
for y in range(img.height):
    line = ""
    for x in range(img.width):
        val = pixels[x, y]
        # invert so bright is dark char if background is transparent/white
        if val > 200:
            line += " "
        else:
            line += chars[int((255 - val) / 255.0 * 9)]
    print(line)
