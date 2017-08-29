=====
Snippets
=====

Snippets is a simple Django rest framework app.

Detailed documentation is in the "docs" directory.

Quick start
-----------

1. Add "sippets" to your INSTALLED_APPS setting like this::

    INSTALLED_APPS = [
        ...
        'sippets',
    ]

2. Include the sippets URLconf in your project urls.py like this::

    url(r'^sippets/', include('sippets.urls')),

3. Run `python manage.py migrate` to create the sippets models.

4. Start the development server and visit http://127.0.0.1:8000/admin/
   to create a sippet (you'll need the Admin app enabled).

5. Visit http://127.0.0.1:8000/sippets/ to participate in the poll.