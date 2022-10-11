// Constructors
this.ShowDrawList();
let counter = [];

let countColumnObj = (data, parent) => {
  for (const key in data) {
    const element = data[key];
    console.log(typeof element === "object")
    if (typeof element === "object" || Array.isArray(element)) {
      if (!isNaN(Number(key))) {
        if (isNaN(Number(counter[counter.length - 1].split("-")[1]))) {
          counter.push("col-" + counter.length);
        }
      } else {
        counter.push("col-" + parent);
      }
      // console.log(counter);
      columns();
      // console.log(counter);
      for (const key in data) {
        const element = data[key];
        if (
          (Array.isArray(element) || typeof element === "object") &&
          isNaN(Number(key))
        ) {
          head(key, counter[counter.length - 1]);
        } else if (typeof element === "object") {
          objContainer(element, counter[counter.length - 1]);
        }
      }
      return;
    }
  }
};

/**
 *
 * @param {*} data
 */
function ShowDrawList() {
  this.getDrawList(fileID).then((data) => {
    try {
      if (data) {
        this.TornadeJsonObject(data);
      }
    } catch (error) {
      console.log(error);
    }
  });
}

/**
 *
 * @param {*} data
 */
function TornadeJsonObject(data, parent) {
  countColumnObj(data, parent);
  for (const key in data) {
    const element = data[key];
    if (Array.isArray(element) || typeof element === "object") {
      this.TornadeJsonObject(element, key);
    }
  }
}

/**
 *
 * @param {*} data
 */
const columns = () => {
  const el = document.getElementById("kt_docs_content");
  const div = document.createElement("dev");
  div.classList.add(
    "col",
    "d-flex",
    "flex-nowrap",
    "mx-10",
    "flex-center",
    "justify-content-around",
    "flex-column"
  );
  div.id = counter[counter.length - 1];
  el.appendChild(div);
};

const head = (Title, column) => {
  let col = column;
  console.log(col);

  do {
    const el = document.getElementById(column);
    const objTitle = document.createTextNode(Title);
    const div = document.createElement("dev");
    div.classList.add(
      "row",
      "btn",
      "btn-flex",
      "btn-color-gray-700",
      "btn-active-color-primary",
      "bg-body",
      "h-40px",
      "border-0",
      "fw-bold",
      "px-4",
      "px-lg-6",
      "flex-center"
    );
    div.id = Title + "-child";
    div.appendChild(objTitle);
    el.appendChild(div);
  } while (valParent(parent));
};

const objContainer = (obj, column) => {
  const el = document.getElementById(column);
  const div = document.createElement("dev");
  for (const key in obj) {
    const element = obj[key];
    if (typeof element !== "object" && !Array.isArray(element)) {
      const objTitle = document.createTextNode(`${key}  : " ${element} "`);
      const span = document.createElement("span");
      span.appendChild(objTitle);
      div.appendChild(span);
    }
  }
  div.classList.add(
    "row",
    "card",
    "bg-body",
    "border-0",
    "fw-bold",
    "my-8",
    "p-4",
    "px-lg-6",
    "text-start"
  );
  div.id = counter[counter.length - 1] + "-child-card";
  el.appendChild(div);
};

const valParent = (key) => {
  const el = document.getElementById(key + "-child");
  let i = 0;
  if (el) {
    const elParent = el.parentNode;
    const elChild = elParent.childNodes;
    if (elChild[0].parentNode.id != "col-undefined") {
      do {
        i++;
        if (elChild[i - 1].parentNode.id != elChild[i].parentNode.id)
          return false;
      } while (
        elChild[i - 1].parentNode.id == elChild[i].parentNode.id &&
        elChild.length < i
      );
      return key;
    }
  }
  return false;
};
