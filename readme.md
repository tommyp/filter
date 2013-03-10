# Searcher

Call plugin on the input element and pass jQuery objects to the settings

```Javascript
$('#search').searcher({
  'container' : $('ul'), 
  'item'      : $('li'),
  'text'      : $('a')
});
```
Container = your element that contains the things you want to filter
Item = the elements you want to show/hide
Text = the element inside your Item that you want to search