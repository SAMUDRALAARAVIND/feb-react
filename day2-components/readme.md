# React components & webpack

* build a light weight React application
* loaders in webpack
* JSX (javascript xml), React component

### Why JSX & Babel ?
  - We know to create React elements we need to call `React.createElement()` function for every element.
  - For example 
  ```html
    <div id="test">
        <p>
            Paragraph 
            <b class="abc">Bold text</b> 
        </p>
        <span id="xyz">Span text</span>
    </div>
  ```
  To create above kind of HTML structure using React we need to write the below javascript code.
  ```javascript
    const bold = React.createElement('b', { className: 'abc' }, 'Bold text');
    const span = React.createElement('span', { id: 'xyz' },'Span text');
    const para =  React.createElement('p', null, 'Paragraph ', bold);

    const element = React.createElement('div',{ id: 'test' }, para, span);
  ``` 
  - which is very hard to write and maintain the code. 
  - To solve this problem `JSX` (JavaScript XML) comes into picture, where it allows us to write the `XML` like code within the javascript files.
  - Writing `XML` like code with in the javascript code is called as `JSX`.
  ```jsx
    const element = <p>Some text</p>; // element variable is holding jsx
    let name = "aravind"; // name is holding string data type
  ```
  - Natively javascript can't understand `jsx` code during runtime,so we need a compiler which can compile `jsx` like code into `javascript` code.
  - There are few such compilers(libraries) available which can convert `jsx` code to `React Elements`, one popular compiler is `Babel`.
  ```javascript
    const element = (
        <div id="test">
        <p>
            Paragraph 
            <b class="abc">Bold text</b> 
        </p>
        <span id="xyz">Span text</span>
    </div>
    );

    // Babel will compile the above code into 

    const element = React.createElement('div',{id:'test'}, 
                        React.createElement('p', null, 
                            'Paragraph ', 
                            React.createElement('b', {className:'abc'}, 
                            'Bold text')), 
                        React.createElement('span', {id:'xyz'},'Span text')
                    );
  ```

  - #Note: `JSX` element should always be a single element.
  ```javascript 
    const element = <p>Some text</p> ; // valid


    const element1 = <p>text 1</p> <p>text 2</p>; // Invalid as it's two different elements.

    const element = (
        <>
            <p>text 1</p> 
            <p>text 2</p>
        </>
    ); // correct way to wrap multiple elements 
  ```
  - Self closing tags need to be closed properly.
  ```javascript
   const image2 = <img src="https://abc.com/image.jpg" alt="something" /> // correct way
    const image1 = <img src="https://abc.com/image.jpg" alt="something" >;
    // incorrect
  ```

  - We can bind variables (data) with `jsx` using curlybraces `{}`.
  ```javascript 
    const imageUrl = "https://abc.com/image.jpg", altMessage = "something";
    const username = "Aravind";

    const imageElement = <img src={imageUrl} alt={altMessage} />;

    const h1 = <h1 id={"test"}>{username}</h1>;
  ```

  - In `jsx` we can also bind another react element or list of elements using curly braces.
  ```javascript
    
    const element = (
        <div>
            {<p>para text</p>}
            {
                [
                    <b>Bold 1</b>,
                    <b>Bold 2</b>,
                    <b>Bold 3</b>
                ]
            }
        </div>
    );
  ```

  - If a function is returning `jsx` then we can use that function as a custom tag in another jsx ( but the function name should start with a capital letter )
  ```javascript
    function Component(props){
        console.log(props); // { name: "aravind", age: 23 }
        return (
            <div>
              <h1>{props.name}</p>
              <h2>{props.age}</p>
            </div>
        );
    }

    const element = (
        <div>
            <Component name="aravind" age="23" />
        </div>
    )
  ```
  - A component in React represents a small chunk of UI in the whole application. So every React application will be constructed using large number of components.
  - We can also write some expresssions with in the `{}` notation of `jsx`. using which we can acheive conditional rendering of react elements.

  ```javascript 
    function Component(){
        const x = false;

        return (
            <div>
                {
                    x ? <h1>Aravind</h1> : <h2>Aravind</h2>
                }
            </div>
        )
    }
  ```
  - Above one is a ternary expression which always results in any one of `h1` or `h2` jsx elements depending on the `x` value.