import { steptacular } from 'steptacular';
steptacular([
    {
        name: 'step1',
        run: ({ utils, next }) => {
            utils.prompt("working");
            next();
        }
    }
]);
