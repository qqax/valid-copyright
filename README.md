# Valid Copyright
This package allows you to always have an up-to-date copyrighting.
## Install
```
npm install valid-copyright
```
## Usage
First year of copyright is required.
```javascript
copyright(2020);
```
In this example, if the current year is 2020 or earlier than the first year, the output will be:
```
© 2020. All Right Reserved.
```
Otherwise, if the current year is, for example, 2024:
```
© 2020 — 2024. All Right Reserved.
```
### Optional parameter 'owner'
```javascript
copyright(2020, "John Donne");
```
The output if the current year is, for example, 2024:
```
© 2020 — 2024 John Donne. All Right Reserved.
```
## License
[MIT](https://choosealicense.com/licenses/mit/)