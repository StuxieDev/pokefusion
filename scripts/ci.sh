set -e

this_script_dir="$(cd "$(dirname "$0")" && pwd)"
project_dir="${this_script_dir}/.."

cd "${project_dir}"

npm run format-validate
npm run lint -- --max-warnings=0
npm run ts-validate
# npm run test
npm run build
