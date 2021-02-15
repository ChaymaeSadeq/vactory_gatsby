# Icon
```
import Icon, {mergeIcons, iconSet, VactoryIconProvider} from 'vactory-ui';
```

## Description
Le composant `Icon` sert à afficher une icône.

## Configuration
1. Exporter la liste de vos icône `selection.json` depuis: [icomoon](https://icomoon.io/)
2. Fusionner  votre collection d'icône avec celle de `vactory-ui` :
```
const mergedIcons = mergeIcons(iconSet, customIconSet)
```
3. Fournir la collection fusionnée à `VactoryIconProvider`:
```
<VactoryIconProvider value={mergedIcons}>
    <Icon name="custom-plus">
</VactoryIconProvider>
```

## API


| props         | Description   | type   | valeur par défaut   |
|---------------|---------------|
| `name` ou `icon` |le nom ou l'identifiant de l'icône   | `string`   | -   |
| color         | Voir la doc de `styled-system`  |    |    |
| size         | Voir la doc de `styled-system`  |    |    |
| space         | Voir la doc de `styled-system`   |    |    |
| __css         |  Voir la doc de `Box`  |    |    |
| sx         |   Voir la doc de `Box`  |    |    |