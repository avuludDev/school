module.exports = function(eleventyConfig) {
    // Input Directory : src Output directory: _site
    eleventyConfig.addPassthroughCopy({ "src": "/" });
    return {
        dir: { input: 'src', output: 'site' }
    };
};