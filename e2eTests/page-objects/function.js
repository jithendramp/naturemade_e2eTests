export const waituntilisvisible = (locator, time, comment, booleanValue) => {
    browser.waitUntil(
      function() {
        return browser.isVisible(locator) === booleanValue;
      },
      time,
      comment
    );
  };