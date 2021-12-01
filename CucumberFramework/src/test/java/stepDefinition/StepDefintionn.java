package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefintionn {
	
	WebDriver driver;
	
	@Given("^Test URl already launched$")
	public void test_URl_already_launched(){
		ChromeOptions option = new ChromeOptions();
		option.addArguments("--dns-prefetch-disable");
		option.addArguments("--start-maximized");
		option.addArguments("--disable-extensions");
		System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
		driver=new ChromeDriver(option);
		driver.get("https://ui.freecrm.com/");
		driver.manage().window().maximize();
	}
	
	@When("^user enters login credentials$")
	public void user_enters_login_credentials() {
//		driver.findElement(By.name("email")).sendKeys("mech.sathishkumars@gmail.com");
//		driver.findElement(By.name("password")).sendKeys("Sathish123");
//		driver.findElement(By.xpath("//div[@class='ui fluid large blue submit button']")).click();		
	}
	
	@Then("^closing browser$")
	public void closing_browser() throws Throwable {
	    driver.quit();
	}

	
	

}
