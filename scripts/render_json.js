const path = require('path')
const { spawn } = require('child_process')

const { PluginError } = require('gulp-util')
const { obj: stream } = require('through2')


module.exports = base => stream((file, _, done) => {
    if (file.isNull()) {
        return done();
    }

    if (file.isStream()) {
        return done(new PluginError('render_page', 'Streams are not supported.'))
    }

    let stdout = ''
    let stderr = ''

    const render = spawn(
        './scripts/render_json.py',
        [
            '-i', file.path,
            '-b', path.resolve(base),
        ]
    )

    render.stdout.on('data', data => { stdout += data })
    render.stderr.on('data', data => { stderr += data })

    render.on('close', code => {
        if (code) {
            return done(new PluginError('render_json', stderr))
        }

        file.path = file.path.replace(/\.md$/, '.json')
        file.contents = Buffer.from(stdout, 'utf8')

        done(null, file)
    })
})
