### Vue3 Quasar Telephone Input ( VUE3-Q-TEL-INPUT )

The plugin was made over Vue3 while considering the [Quasar Framework v2.X](https://quasar.dev/). The plugin provides auto country detection on user inputs as well as dropdown for country which supports search by name, country code, and country phone code. The countries are sorted alphabetically.

A live preview for the code is available in [CodePen](https://codepen.io/CdTgr/full/PoMmeRZ)

Contributors are [welcome](https://github.com/CdTgr/vue3-q-tel-input/graphs/contributors).

---

### Version 1

> Recommended to upgrade to v2.

For v1 documenation please refer [here](./docs/v1.md)

#### Installation

##### Package manager

yarn

```
yarn add vue3-q-tel-input-sorted
```

npm

```
npm i vue3-q-tel-input-sorted
```

Import the component as

```
import Vue3QTelInput from 'vue3-q-tel-input-sorted'
```

Import the styles as

```
import 'vue3-q-tel-input-sorted/dist/style.css'
```

##### CDN / UMD

###### UNPKG

```
http://unpkg.com/vue3-q-tel-input-sorted@latest/dist/vue3-q-tel-input.umd.js
http://unpkg.com/vue3-q-tel-input-sorted@latest/dist/style.css
```

###### JSDELIVR

```
https://cdn.jsdelivr.net/npm/vue3-q-tel-input-sorted@latest/dist/vue3-q-tel-input.umd.js
https://cdn.jsdelivr.net/npm/vue3-q-tel-input-sorted@latest/dist/style.css
```

#### Usage

```
<vue3-q-tel-input v-model="tel" />
```

All the props that are supported in the [quasar input](https://quasar.dev/vue-components/input) field are available in the plugin as well.

_example_

```
<vue3-q-tel-input v-model="tel" dense outlined />
```

All the slots that are supported in the [quasar input](https://quasar.dev/vue-components/input) field are available in the plugin as input slots. The country selection element uses `append` slot.

_example_

```
<vue3-q-tel-input>
  <template v-slot:append>
    <q-avatar>
      <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
    </q-avatar>
  </template>
</vue3-q-tel-input>
```

All the slots that are supported in [quasar select](https://quasar.dev/vue-components/select) field are available in the plugin as country select control slots with the prefix `cs-`.

_example_

```
<vue3-q-tel-input>
  <template v-slot:cs-before-options>
    <q-item>
      <q-item-section>
        This renders as before-options q-select slot in the country list
      </q-item-section>
    </q-item>
  </template>
</vue3-q-tel-input>
```

#### Model

| Model     | Type    | Description                               | Usage                        | Required |
| --------- | ------- | ----------------------------------------- | ---------------------------- | -------- |
| _default_ | string  | The telephone value                       | `v-model="telephone_number"` | ✅       |
| country   | Country | The country object, useful to get it back | `v-model:country="country"`  | ❌       |

#### Props

| Prop                           | Type    | Required | Description                                                                           |
| ------------------------------ | ------- | -------- |---------------------------------------------------------------------------------------|
| required                       | Boolean | No       | Shows error validation when the field is empty                                        |
| search-text                    | String  | No       | The label for the search field inside the country dropdown                            |
| search-icon                    | String  | No       | Set the icon for the search field to something else                                   |
| default-country                | String  | No       | The default country to load. eg: us, ae, de, in, etc.                                 |
| dropdown-options               | Obejct  | No       | The props available for the [Quasar Select](https://quasar.dev/vue-components/select) |
| eager-validate                 | Boolean | No       | Set to true if the validation needs to be run on loading                              |
| use-icon                       | Boolean | No       | Set to use the emoji icon instead of the default flag images                          |
| no-results-text                | String  | No       | Set a string when the search results nothing, default: 'No results found'             |
| disable-auto-country-selection | Boolean | No       | Prevent the input field value from changing the country selection                     |
| autofocus-input                | Boolean | No       | Focus automatically to the search input when country selection is opened              |
| autofocus-input                | Boolean | No       | Focus automatically to the search input when country selection is opened              |
| disable-auto-country-selection | Boolean | No       | Disable country selection if phone number without leading + is entered                |

#### Events

| Emitter | Type    | Description                                         |
| ------- | ------- | --------------------------------------------------- |
| input   | string  | Triggers when the input value changes               |
| error   | boolean | true when the input is invalid and false when valid |

### Credits

- Project uses [REST Countries](https://restcountries.com/) for generating country list.
- Thanks to the [people](https://github.com/CdTgr/vue3-q-tel-input/graphs/contributors) who have already contributed to the project
