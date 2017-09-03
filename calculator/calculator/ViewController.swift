//
//  ViewController.swift
//  calculator
//
//  Created by Cheng Jin on 2017/9/3.
//  Copyright © 2017年 NJJ. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    @IBOutlet weak var display: UILabel!
    
    var userIsInTheMiddleOfTyping = false
    
    @IBAction func touchDigit(_ sender: UIButton) {
        let digit = sender.currentTitle!
        if userIsInTheMiddleOfTyping {
            let textCurrentlyInDisplay = display.text!
            display.text = textCurrentlyInDisplay + digit
        }else{
            display.text = digit
            userIsInTheMiddleOfTyping = true
        }
    }
    
    var displayValue: Double {
        get {
            return Double(display.text!)!
        }
        set {
            display.text = String(newValue)
        }
    }
    
    
    
    @IBAction func performOperation(_ sender: UIButton) {
        userIsInTheMiddleOfTyping = false
        let mathematicalSymbol = sender.currentTitle!
        switch mathematicalSymbol {
        case "π":
            displayValue = Double.pi
        case "√":
            displayValue = sqrt(displayValue)
        default:
            break
        }
        
    }
    
}

