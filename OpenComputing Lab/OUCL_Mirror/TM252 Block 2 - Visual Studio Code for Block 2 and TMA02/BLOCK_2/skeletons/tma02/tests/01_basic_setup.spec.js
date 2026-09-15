import { test, expect } from '@playwright/test';

test.describe("the web page structure has not been modified", {
  tag: ["@tma02/q1/complete-fail"]
}, () => {
  test("the web page loads", {
    tag: "@tma02/q1/no-count",
    annotation: [
      {
        "type": "feedback",
        "description": "The 'index.html' file did not load correctly. Please make sure that you have not modified any of the files outside of the 'app' folder."
      },
      {
        "type": "feedback",
        "description": "If this happens repeatedly, please ask for support from your tutor or the forums."
      },
    ]
  }, async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/EduMax Assessment Dashboard/);
  });

  test("the web page structure is as provided in the resources", {
    tag: "@tma02/q1/no-count",
    annotation: [
      {
        "type": "feedback",
        "description": "The 'index.html' file does not have the structure provided in the original file from the TMA resources. Please do not change the structure of that file, as it will cause tests to fail."
      },
      {
        "type": "feedback",
        "description": "If this happens repeatedly, please ask for support from your tutor or the forums."
      },
    ]
  }, async ({ page }) => {
    await page.goto('/');
    await expect(page.locator(".state-completed")).toHaveCount(2);
    await expect(page.locator(".state-incomplete")).toHaveCount(1);
  });

  test('the web page title contains your student id', {
    tag: "@tma02/q1/no-count",
    annotation: [
      {
        "type": "feedback",
        "description": "The title of the 'index.html' file does not contain your student id. Please make sure that the value of the '<title>' tag is 'EduMax Assessment Dashboard - STUDENTID', replacing the STUDENTID with your own student identifier."
      },
      {
        "type": "feedback",
        "description": "If this happens repeatedly, please ask for support from your tutor or the forums."
      },
    ]
  }, async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/EduMax Assessment Dashboard - [a-zA-Z0-9]+/);
    test.info().annotations.push({
      type: "student-id",
      description: (await page.locator("title").textContent()).match(/EduMax Assessment Dashboard - ([a-zA-Z0-9]+)/)[1],
    });
  });
});
