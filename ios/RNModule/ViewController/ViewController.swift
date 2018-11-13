//
//  ViewController.swift
//  RNModule
//
//  Created by 홍창남 on 05/11/2018.
//  Copyright © 2018 홍창남. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
    }

    @IBAction func highScoreBtnTapped(_ sender: Any) {
        NSLog("Hello")

        let mockData:NSDictionary = ["scores":
            [
                ["name":"Alex", "value":"42"],
                ["name":"Joel", "value":"10"]
            ]
        ]

        let rootView = RCTRootView(RNBridgeManager.default,
                                   moduleName: "RNHighScores",
                                   initialProperties: mockData as [NSObject : AnyObject])

        let vc = UIViewController()
        vc.view = rootView
        self.present(vc, animated: true, completion: nil)
    }

    @IBAction func flatListBtnTapped(_ sender: Any) {
        performSegue(withIdentifier: "ToFliatListBasic", sender: nil)
    }

    @IBAction func setttingBtnTapped(_ sender: UIButton) {
        performSegue(withIdentifier: "ToSettingSectionList", sender: nil)
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if segue.identifier == "ToFliatListBasic" {
            if let destination = segue.destination as? FlatListViewController {
                let flatListView =  RCTRootView(RNBridgeManager.default,
                                                moduleName: "FlatListBasic",
                                                initialProperties: nil)
                destination.view = flatListView
            }
        } else if segue.identifier == "ToSettingSectionList" {
            if let destination = segue.destination as? SettingsSectionListViewController {
                let settingsSectionListView =  RCTRootView(RNBridgeManager.default,
                                                           moduleName: "SettingsSectionLists",
                                                           initialProperties: nil)
                destination.view = settingsSectionListView
            }
        }
    }

}

