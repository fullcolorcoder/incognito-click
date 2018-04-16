# Incognito Click

This is a Chrome Extension that gives you a keyboard shortcut for opening links in an Incognito Window when clicking while holding "a".

Now you can avoid using the contextual menu for private browsing. I made this as a quick nice to have tool and it's not a one shot covers all scenarios. See known issues.


### Installing

1) Enable Developer Mode.

In Chrome, enable Developer Mode on the extensions settings page.

```
Windows > Extensions - Check "Developer Mode" in upper right.
```

2) Install Files by clicking "LOAD UNPACKED" and browsing to this folder.

```
LOAD UNPACKED
```

3) Reload any current page open or start browsing away.

### Usage

Hold down the "a" key and click on a link. Bazinga!

```
Hold "a" + Click a Link
```

### Known Issues

- This is a pretty simple implementation of the concept and only covers a tags.
- Sites with competing bindings to the "a" keyboard event wont work as smoothly.
- Inconsistent use of pressing "a" and clicking can somtimes produce multiple windows.

### Todo

- [ ] Add config options for customizing key event
- [ ] Expand binding to more scenarios
- [ ] Refactor for more consistent delivery of windows on accidentals.
- [x] Be satisfied you don't have to use the contextual menu.

## Contributing

Feel free.


## Authors

* **Brad Johnson** - *Initial work* - [fullcolorcoder](https://github.com/fullcolorcoder)


## Acknowledgments

Inspiration for this came from [seismicmike](https://github.com/seismicmike) wishing there was a better way.
