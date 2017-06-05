module.exports = {
    status: 'prototype',
    collated: false,
    collator: (markup, item) => {
        return `<!-- Start: @${item.handle} -->\n<p>\n${markup}\n<!-- End: @${item.handle} -->\n</p>\n`;
    },
    variants: [
        { name: 'default' },
        {
            name: 'required',
            context: {
                attrs: 'required'
            }},
        {
            name: 'disabled',
            context: {
                attrs: 'disabled'
            }}
    ]
};
