const texts = [
   'elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci',
   'morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales',
   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas egestas fringilla phasellus faucibus. Ut venenatis tellus in metus vulputate eu scelerisque felis. Nec feugiat nisl pretium fusce. Dignissim sodales ut eu sem. Adipiscing at in tellus integer. Venenatis urna cursus eget nunc scelerisque. Consequat semper viverra nam libero justo laoreet sit amet. At tempor commodo ullamcorper a. In nisl nisi scelerisque eu ultrices.\n\n\n    In nulla posuere sollicitudin aliquam ultrices sagittis orci. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Neque laoreet suspendisse interdum consectetur libero id faucibus. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Tincidunt eget nullam non nisi est. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Sagittis aliquam malesuada bibendum arcu. Tempor commodo ullamcorper a lacus. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Adipiscing vitae proin sagittis nisl rhoncus mattis. Cras fermentum odio eu feugiat pretium nibh ipsum. Facilisis sed odio morbi quis. Varius duis at consectetur lorem donec. Felis eget nunc lobortis mattis aliquam faucibus purus.',
   'dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor',
]

export function randomText() {
   function rdInteger() {
      const max = Math.floor(texts.length)
      const min = Math.ceil(0)
      return Math.floor(Math.random() * (max - min) + min)
   }

   return texts[rdInteger()]
}
