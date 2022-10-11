// Constructors
this.ShowDrawList();
let counter = [];

let countColumnObj = (data, parent = null) => {
  for (const key in data) {
    const element = data[key];
    if (typeof element === "object" || Array.isArray(element)) {
      if (parent == null && counter.length > 0) {
        if (isNaN(Number(counter[counter.length - 1].split("-")[1]))) {
          counter.push("col-" + counter.length);
        } else {
        }
      } else {
        if (parent) {
          if (valParent(parent)) counter.push("col-" + parent);
        } else {
          counter.push("col-" + "firstGrandfather");
        }
      }
      columns();
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
  const colParent = parent ? parent : null;
  countColumnObj(data, colParent);
  for (const key in data) {
    const element = data[key];
    if (typeof element === "object") {
      this.TornadeJsonObject(element, key);
    } else if (Array.isArray(element)) {
      this.TornadeJsonObject(element, (key = null));
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

  const divParent = document.createElement("dev");
  divParent.id = counter[counter.length - 1].split("-")[1] + "-container";
  divParent.appendChild(div);
  el.appendChild(divParent);
};

const valParent = (key) => {
  const el = document.getElementById(key + "-child");
  if (el) {
    const elParent = el.parentNode;
    const elChild = elParent.childNodes;
    const val = [];
    for (let i = 1; i < elChild.length; i++) {
      const element = elChild[i];
      if (elChild.length > 1) {
        val.push(element.id.includes(key));
      }
    }
    return val.includes(true);
  }
  return false;
};
