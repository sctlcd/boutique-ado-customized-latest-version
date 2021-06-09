from django import forms
from .widgets import CustomClearableFileInput
from .models import Product, Category


class ProductForm(forms.ModelForm):

    class Meta:
        model = Product
        fields = ('category', 'sku', 'name', 'description', 'has_sizes', 'price', 'image',)

    image = forms.ImageField(label="Image", required=False, widget=CustomClearableFileInput)

    def __init__(self, *args, **kwargs):
        """
            Add placeholders and classes, set autofocus on first field
        """
        super().__init__(*args, **kwargs)
        placeholders = {
            'sku': 'Sku',
            'name': 'Name',
            'description': 'Description',
        }
        categories = Category.objects.all()
        friendly_names = [(c.id, c.get_friendly_name()) for c in categories]

        self.fields['category'].choices = friendly_names

        self.fields['category'].widget.attrs['autofocus'] = True

        for field in self.fields:
            if field == 'sku' or field == 'name' or field == 'description':
                if self.fields[field].required:
                    placeholder = f'{placeholders[field]} *'
                else:
                    placeholder = placeholders[field]
                self.fields[field].widget.attrs['placeholder'] = placeholder
            self.fields[field].widget.attrs['class'] = 'border-grey rounded-0'
