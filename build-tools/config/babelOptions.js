module.exports = {
    'presets': [
        ['env', {
            targets: {
                browsers: require('./browserlist'),
                modules: false
            }
        }],
        ['es2015', { 'modules': false }],
        'stage-0',
        'react'
    ],
    'plugins': [
        'transform-runtime',
        'transform-object-rest-spread',
        'transform-es2015-modules-commonjs'
    ],
    'env': {
        'production': {
            'plugins': [
                'transform-react-constant-elements',
                'transform-react-inline-elements'
            ]
        }
    }
};
