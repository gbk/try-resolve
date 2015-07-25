# try-resolve

## Installation

```sh
$ npm install try-resolve
```

## Example

```javascript
if (require("try-resolve")("/home/sebastian/file")) {
  // this file can be required
} else {
  // it can't
}
```

## Usage

**tryResolve(filename, [require])**

 - `filename` is a filename to be resolved.
 - `require` is an optional instance of the `require` function from any file.
