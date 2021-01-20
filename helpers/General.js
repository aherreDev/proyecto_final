module.exports = {
    // ? Helper based on the instanceof keyword
    isInstanceOf: (instance, classDefinition) => (
        instance && instance.constructor.name == classDefinition.name
    )
}