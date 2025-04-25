# Stylewind

A powerful and intuitive _`CSS-in-JS library`_ that brings _`scoped class names, runtime variable injection, shorthand syntax, and query blocks`_ into a single ergonomic _`developer experience`_. Inspired by the elegance of _`Tailwind`_’s utility-first approach and the flexibility of _`styled-components`_, _`Stylewind`_ is optimized for _`dynamic styling`_ with real component encapsulation and runtime control.

---

# 🔧 Installation

```bash
npm install styledwindjs

or

yarn add styledwindjs
```

---

# ✨ Before Start

To get the **best experience** with _`Stylewind`_, we highly _`recommend`_ installing the **VSCode Extension: [styledwind-intellisense](https://marketplace.visualstudio.com/items?itemName=punlx.styledwind-intellisense)**.

![vscode-extension-simple](https://i.imgur.com/XgCqOLM.gif)

> 😎 _`No need to study docs`_ to learn how to write styles — _`if you know CSS, you’re good`_ to go with _`Stylewind.🎉`_

> 🛠️ _`Styledwind Intellisense`_ only works with **`.css.ts` files**.

---

# 🚀 Extension Quick Look

You can create a _`Styledwind Template`_ using the _`snippet`_, Simply type _**"swdc"**_.

![vscode-styledwind-intellisense-swdc](https://i.imgur.com/rRMOr76.gif)

---

Run the command **(Control + Shift + P)** → _`“Generate Styledwind Generic”`_ and it will handle _`formatting`_ and _`type generation`_ automatically.

![vscode-extension-generate-type](https://i.imgur.com/nUvE6JN.gif)

- 🎨 All you need to do is _`focus on writing your styles`_.

- 🎇 _`Don't worry about typing.`_

---

When you use **appcss**, you'll get _`class name suggestions`_ based on what's defined in your **app.css.ts**.

![appcss-with-typing](https://i.imgur.com/SrcNEtC.gif)

- 🔐 The `.get` property is used for _`dynamic runtime $variables`_.
- 👉 You’ll learn more about this in the _`Runtime $variable`_ section.

---

# 🖌️ Getting Started

To begin using _`Stylewind`_, create a file named after your component's _`scope`_ using the **.css.ts** suffix.  
 This _`naming convention`_ — for example, **app.css.ts** — ensures _`consistency`_ and enables _`Styledwind Intellisense`_ to work smoothly.

![getting-started-001](https://i.imgur.com/UrIes1u.png)

![in-app-tsx](https://i.imgur.com/rSUA6ff.png)

**DOM Output**

```html
<div class="app_box">
  <div class="app_text">text</div>
</div>
```

**Injected CSS**

```css
.app_box {
  background-color: white;
  padding: 16px;
  border-radius: 12px;
}

.app_text:hover {
  background-color: blue;
  color: white;
}
.app_text {
  font-size: 18px;
  color: #313131;
}
```

---

# ❗ `!important`

_`In some cases,`_ you may want to **enforce a specific style value** — even if it gets _`overridden`_ elsewhere.

### ✨ How to Use

Just place a **!** _`right after the value`_ inside the square brackets:

![important-showcase](https://i.imgur.com/jDK1z2v.gif)

💡 _`Stylewind Intellisense`_ helps you _`avoid confusion`_ and _`quickly`_ distinguish _`high-priority`_ styles.

**Injected CSS**

```css
.app_box {
  background-color: red !important;
  color: white !important;
}
```

---

# 🌀 States

The **state(...)** allows you to define styles for _`interaction, form, link`_ states such as _`hover, disabled, visited`_ and more.

- You must write _`all properties inside the state on the same line`_.

![states-showcase](https://i.imgur.com/XdY04yg.png)

**Injected CSS**

```css
.app_box {
  color: black;
}

.app_box:hover {
  background-color: red;
  color: black;
}

.app_box:focus {
  background-color: green;
  color: pink;
}
```

**🎯 Supported**

- **Interaction states:** _`hover, focus, active, target, focus-within, focus-visible.`_

- **Form states:** _`disabled, enabled, read-only, read-write, required, optional, checked, indeterminate, valid, invalid, in-range, out-of-range, placeholder-shown, user-invalid, default.`_

- **Link states:** _`link, visited.`_

---

# 🍪 Pseudo Element

_`Stylewind`_ allows _`pseudo-elements ::before ::after ::placeholder ::selection and more...`_ with _`full shorthand`_ support.

- As always, you must keep it on a _`single line`_ only.

![before-after-showcase](https://i.imgur.com/uPsFoTc.png)

**Injected CSS**

```css
.app_box {
  color: black;
}

.app_box::before {
  content: '👈 previous';
  color: white;
  background-color: black;
}

.app_box::after {
  content: 'next 👉';
  color: black;
  background-color: pink;
}
```

**🎯 Supported Pseudo:** _`before, after, placeholder, selection, file-selector-button, first-letter, first-line, marker, backdrop, spelling-error, grammar-error.`_

---

# 💻 Media Screen & Container

_`Stylewind`_ supports both _`responsive breakpoints`_ and _`container-based`_ styling via _`screen(...)`_ and _`container(...).`_

- Again, you must keep it on a _`single line`_ only.

![media-screen-container-query-showcase](https://i.imgur.com/1lx7SCw.png)

**Injected CSS**

```css
.app_box {
  color: black;
}

@media only screen and (max-width: 600px) {
  .app_box {
    background-color: red;
    color: white;
  }
}

/* Requires parent with container-type: <value>. */
@container (min-width: 600px) {
  .app_box {
    background-color: blue;
    color: yellow;
  }
}
```

### ⚠️ Limitations

_`Stylewind`_ supports only **simple** _`media and container queries`_ using the **following patterns:**

- ✅ `screen(`**max-w[...]**`, ...)`
- ✅ `screen(`**min-w[...]**`, ...)`
- ✅ `container(`**max-w[...]**`, ...)`
- ✅ `container(`**min-w[...]**`, ...)`

_`These queries`_ follow the **classic breakpoint pattern** for _`clean`_ and _`predictable responsive design.`_

> 🧠 **In addition**, _`Stylewind`_ also supports _`custom breakpoints`_ via **theme.breakpoint(...)**,

> which _`you'll learn`_ more about in the **Theming - Breakpoints** section.

---

# 💥 Runtime Variable

_`Stylewind`_ supports _`dynamic runtime styling`_ through **$variables.** You can _`inject CSS values`_ at **runtime** using the **.get(...).set(...)** method.

### 🎨 Suppose you define a `background-color` normally.

![common-bg-styling](https://i.imgur.com/V90Gezl.png)

**Injected CSS**

```css
.app_box {
  background-color: red;
}
```

### 🎇 Set _`background-color`_ to be _`dynamic runtime variable.`_

- You simply _`add`_ a **"$"** in front of **"bg"** like below.

- After running **(Control + Shift + P)** → _`"Generate Styledwind Generic"`_, You’ll see **box: ["$bg"]** in the _`generated type.`_

![dynamic-bg-styling](https://i.imgur.com/kfV3dY4.png)

**Injected CSS**

```css
:root {
  --bg-app_box: red;
}

.app_box {
  background-color: var(--bg-app_box);
}
```

Now we can make the _`background-color`_ dynamic by using the **.get(...).set(...)** method like this:

![get-set-bg](https://i.imgur.com/w5Ru1Tg.gif)

💡 You can set `$bg`**[initial]** when the _`initial`_ value of the style is **unknown.**

![runtime-variable-initial](https://i.imgur.com/gMEnFxP.png)

---

### 💥 `Runtime Variable` Usage

![runtime-variable-change-bg](https://i.imgur.com/mB9uyEX.png)![change-bg-runtime](https://i.imgur.com/McZt5mI.gif)

### ⚡ `Zero Re-render,` **High Performance**

- _`Updating a runtime $variable`_ only performs a **style.setProperty(...)** operation on a _`CSS variable`_ —  
  there is **no re-render involved at all**, which makes it _`extremely fast.`_

- Additionally, _`Stylewind`_ is **optimized** to _`batch and apply`_ **thousands of CSS variable updates in a single frame**  
  without any noticeable _`performance`_ impact.

> 🧠 This makes it ideal for _`real-time theming, animation controls, dynamic UIs, or any performance-sensitive updates.`_

---

### ✅ Where `$variables` Can Be Used

Runtime `$variables` can be used **almost anywhere inside your class.**

![where-to-use-runtime-variable](https://i.imgur.com/NVmYdIz.png)

- ❌ _`Not allowed`_ for **ct[...]**.

- ❌ _`Not allowed`_ inside **screen(...)**.

- ❌ _`Not allowed`_ inside **container(...)**.

- And _`not allowed`_ inside **@query**, you'll _`lerrn`_ later.

---

# 📦 Local Variable

You can declare _`local scoped variables`_ within a class using **--&localVar[**`value`**]** syntax. These are useful for _`reusable values`_ within the _`same class or pseudo/context.`_

![local-variable-showcase](https://i.imgur.com/j1hHGj9.png)

**Injected CSS**

```css
.app_box {
  --color-app_box: red;
  background-color: var(--color-app_box);
}
```

- 🧠 _`Local variables`_ **--&localVar** can be used _`not only in base styles,`_ but also inside _`states(...), pseudo-elements`_ like **before(...)**, and more.

- 🎇 _`Most importantly,`_ **--&localVar** works _`seamlessly`_ with **@const and @use**, allowing you to build _`flexible and reusable`_ style blocks —
  you'll learn more about that in the _`@directives`_ **@const and @use** section.

---

# 📚 Directive Features

_`Stylewind`_ comes with a set of powerful _`@directives`_ that make your styling _`expressive, composable, and reusable`_ — all while keeping your _`code clean`_ and _`maintainable.`_

Here's a quick overview of the available `directives:`

| Directive  | Description                                                                   |
| ---------- | ----------------------------------------------------------------------------- |
| **@scope** | Defines a _`prefix for all classes`_ in the block to avoid naming collisions. |
| **@bind**  | Binds _`multiple classes`_ into a new custom key (e.g. for combined usage).   |
| **@const** | Declares _`reusable style blocks`_ for use in multiple classes.               |
| **@use**   | _`Applies`_ one or more `@const` blocks into a class.                         |
| **@query** | Defines _`nested selectors`_ inside a class block, similar to scoped nesting. |

---

# 🧭 @scope

The **@scope** directive defines a **namespace** or **prefix** for all classes declared in the current `styled` block. This _`prevents global class name collisions`_ and _`creates a clear structure`_ for component-level styling.

- ✏️ The _`scope name`_ must be a _`valid string`_ such as _`alphanumeric, underscore, or dash.`_

- 👉 You must provide _`one and only one @scope per styled block`_.

### 📌 Syntax

![scope-syntax-showing](https://i.imgur.com/T6dnVax.png)

![scope-syntax-profile-tsx](https://i.imgur.com/07iMkxN.png)

**DOM Output**

```html
<div class="profile_container">
  <div class="profile_title">John Doe</div>
</div>
```

**Injected CSS**

```css
.profile_container {
  background-color: white;
}

.profile_title {
  font-size: 24px;
}
```

---

### 🚪 Want to _`Skip`_ Scoping?

Use **@scope none** when you need to _`override global classes, share utilities across components`_ — or just whenever you need _`full global access.`_

> If **skip** scoping:

![skip-scope-using-none](https://i.imgur.com/uic4jCK.png)

**DOM Output**

```html
<div class="container">
  <div class="title">John Doe</div>
</div>
```

**Injected CSS**

```css
.container {
  background-color: white;
}

.title {
  font-size: 24px;
}
```

---

### 🚫 Limitations of Using **@scope <name>**

- If _`missing scope in the class`_, It will _`throw`_ an error:

```tsx
[SWD-ERR] You must provide "@scope <name>" in styled(...) template.
```

- _`Scope names`_ must be _`unique`_ per file. _`If two files declare the same scope`_, you'll get a _`warning in dev mode`_:'

```tsx
[SWD-ERR] scope "profile" is already used in another file.
```

### 🧠 Tips

- 🧩 _`Match`_ the _`scope name`_ to your _`component`_ or _`file name`_ for _`consistency.`_

> **Button** → _`@scope button`_ → **button.css.ts**  
>  **Modal** → _`@scope modal`_ → **modal.css.ts**

- ✅ You can **import and reuse** the _`same scoped`_ style _`across multiple components`_

- ⚠️ Avoid _`declaring the same scope name in multiple files.`_

---

# 🧷 @bind

The **@bind** directive allows you to _`combine multiple class names into a new custom key.`_ This is useful when you want to _`reference a set of existing classes`_ as a group.

### 📌 Syntax

The **@bind** keyword takes a name and one or more _`.class references.`_

![bind-directive-showcase](https://i.imgur.com/J5is4YF.gif)

To use **@bind wrapper**, simply _`reference`_ it in your **app.css.ts** like this:

![bind-use-with-app](https://i.imgur.com/8lxvjSL.gif)

**DOM Output:**

```html
<div class="app_box app_shadow">box</div>
```

**Injected CSS**

```css
.app_box {
  --color-app_box: red;
  background-color: var(--color-app_box);
}

.app_shadow {
  box-shadow: 0 0 8px black;
}
```

### 🧠 Tips

- 🧩 Think of **@bind** like a _`"logical alias"`_ for _`multiple class names`_ — **not a new class, but a shortcut!**

- ✅ This helps _`clean up your JSX`_ and _`centralize reusable logic.`_

- ⚠️ Keep your **@bind** names descriptive but short _`(e.g. wrapper, badgeCombo, etc.)`_

---

# 🧱 @const & @use

The **@const** directive allows you to define _`reusable style blocks`_ that can be shared across _`multiple classes.`_ Then, use the **@use** directive to _`apply one or more of those constants`_ into a class.

### 🧪 Syntax

![const-use-1](https://i.imgur.com/njFw5zG.png)

![const-use-2](https://i.imgur.com/yLv4rjO.png)

**DOM Output:**

```html
<div class="app_card">box</div>
<div class="app_header">card</div>
```

**Injected CSS**

```css
.app_box {
  background-color: red;
  color: white;
  border-radius: 12px;
  height: 300px;
  width: 300px;
}

.app_card {
  background-color: red;
  color: white;
  border-radius: 12px;
  height: 300px;
  width: 600px;
}
```

🔐 This pattern _`improves maintainability`_ and helps _`reduce duplication.`_

⚠️ _`Note`_ **@const** styles are _`merged first.`_ Class-level styles will _`override`_ them if they share the _`same properties.`_

❌ You cannot use **!important** inside a **@const** block. If you try to add `!` to a value in **@const**, It will **throw an error**:

```ts
[SWD-ERR] !important is not allowed in @const block. Found: "bg[red]!"
```

---

### 🔄 Combine **@cosnt** with _`Runtime Variables`_

Define _`$variables`_ in an **@const** block to build _`reusable style templates with dynamic values.`_ — making your styling system both _`flexible`_ and _`powerful.`_

![const-with-runtime-variable](https://i.imgur.com/RVJz0R2.gif)

🧠 _`No need to worry`_ about **types** — _`Styledwind Intellisense`_ has you _`covered`_ 💪

**Injected CSS**

```css
:root {
  --bg-app_box: red;
  --bg-hover-app_box: blue;
  --c-after-app_box: white;
}

.app_box {
  background-color: var(--bg-app_box);
  width: 300px;
  height: 300px;
}

.app_box:hover {
  background-color: var(--bg-hover-app_box);
}

.app_box::after {
  content: 'next 👉';
  color: var(--c-after-app_box);
}
```

---

### 🔄 Combine **@cosnt** with _`Local Variables`_

_`You’re telling Stylewind:`_

- “This **@const box** has a _`background-color,`_ but its value will come _`from the class`_ that uses it.”

![const-use-local-var-1](https://i.imgur.com/9JKtvaN.png)

- _`Each class`_ provides its _`own value`_ for **--&bgColor**, and when **@use box** is applied, It _`replaces`_ the **--&bgColor** _`placeholder`_ with the _`value provided`_ in that class.

**Injected CSS**

```css
.app_redBox {
  --bgColor-app_redBox: red;
  background-color: var(--bgColor-app_redBox);
  color: white;
  width: 300px;
}

.app_blueBox {
  --bgColor-app_blueBox: blue;
  background-color: var(--bgColor-app_blueBox);
  color: white;
  width: 600px;
}
```

---

### 🧠 Tips

✅ You can apply _`multiple`_ **@const** blocks in a _`single class:`_

![multiple-const-showcase](https://i.imgur.com/LTnNmZS.gif)

💡 **Combine** different _`style`_ presets with _`clear, modular naming`_ to keep your styles _`organized.`_

🔁 _`In this case,`_ you’ll _`notice`_ the _`styles`_ are the _`same`_ — the _`last class wins`_ and **overrides** the _`previous ones.`_

🧠 _`Styledwind Intellisense`_ will _`suggest`_ all available **@const** blocks _`defined`_ within the current **@scope app.**

### ⚠️ Limitation

- ❌ `Nesting` **@const** inside another **@const** block is _`not allowed.`_

![limitation-const-use](https://i.imgur.com/rqfarcR.png)

---

# 🔍 @query

The **@query** directive allows you to define **nested selectors** inside a _`single class block.`_

![query-showcase](public/img/image2.png)

![query-apptsx](public/img/image.png)

**DOM Output:**

```html
<div class="app_box">
  <p>text</p>
</div>
```

**Injected CSS**

```css
.app_box {
  background-color: blue;
}

.app_box > p {
  color: white;
}
```

### 🧠 Tips

- 🔧 You can use _`anything`_ that a _`CSS selector`_ supports inside **@query.**

![use-anything-query](https://i.imgur.com/zBwnYBA.gif)

**Injected CSS**

```css
.app_box {
  background-color: blue;
}
.app_box p:first-child {
  color: white;
}
```

### ⚠️ Limitation

The **@query** block does **not support** runtime `$variables`.

![query-not-support-runtime-variable](public/img/image6.png)

---

### 🔄 Combine **@query** with _`Local Variables`_

Just _`like in regular class blocks,`_ you can use **--&localVar** inside **@query** selectors as well.

![local-variable-with-query](public/img/image4.png)

**Injected CSS**

```css
.app_box {
  --color-app_box: white;
  background-color: blue;
}

.app_box p {
  --color-app_box: white;
  color: var(--color-app_box);
}
```

**🧩 Local variables** bring _`scoped consistency`_ to your _`nested selectors`_ — without _`repeating values.`_

### ⚠️ Limitation

- You _`cannot declare new local variables`_ inside **@query** directly.

![local-variable-with-query-not-support](public/img/image7.png)

---

### 🔄 Combine **@query** with **@use**

You can use **@const** inside a **@query** block to keep **nested selectors** _`clean and reusable.`_

![const-with-query-showcase](public/img/image5.png)

### ⚠️ Limitation

- The **@const** used inside **@quer** must _`not contain any`_ **Runtime Variable ($variable).**

![const-runtime-variable-query-not-support](public/img/image8.png)

---

# `You all set! 🎉`

## _**Happy styling with Styledwind! 🎨**_
