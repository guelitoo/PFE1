let mode = "light";

function toggleMode(mode) {
    let mode = mode === "light" ? "dark" : "light";
    console.log("Global:", mode);
    console.log("Local:", mode);
    return mode;
}

toggleMode(mode);