from django.shortcuts import render


# Create your views here.
def gallery(request):
    """
        A view to return the gallery page
    """
    return render(request, 'gallery/gallery.html')
