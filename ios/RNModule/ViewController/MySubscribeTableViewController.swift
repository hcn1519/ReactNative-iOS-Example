//
//  MySubscribeTableViewController.swift
//  RNModule
//
//  Created by USER on 2018. 11. 16..
//  Copyright © 2018년 홍창남. All rights reserved.
//

import Foundation
import UIKit

class MySubscribeTableViewController: UIViewController {
    let mySubscribeTableView = RCTRootView(RNBridgeManager.default,
                                       moduleName: "MySubscribeTableView",
                                       initialProperties: nil)
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        mySubscribeTableView.frame = self.view.frame
        self.view.addSubview(mySubscribeTableView)
        
        self.title = "RN으로 생성된 TableView"
    }
}
